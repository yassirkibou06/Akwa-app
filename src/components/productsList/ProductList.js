import React, { useState, useEffect } from 'react'
import { IoFilterSharp, IoCloseSharp } from 'react-icons/io5'
import axios from 'axios'
import './productList.scss'
import { useLocation, useParams } from 'react-router-dom';
import { ProductsBrandBox } from '../input/ProductsBrandBox';
import Card from '../card/Card'
import { URL } from '../../App';

const ProductList = () => {
    const [product, setProduct] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [filterItem, setFilterItem] = useState("any")
    const [sortItem, setSortItem] = useState("")

    const location = useLocation();
    const params = useParams();

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get(
                    `${URL}/products/list/${location.pathname.slice(0, 4) === "/men" ? "Men" : "Women"}/${params.categorie}`
                );
                setProduct(response.data.slice(0, 13));
            } catch (err) {
                console.log(err)
            }
        };
        getData();
    }, [location, params]);
    // filter for brand
    const filterProductsBrand = product.filter((prod) =>
        filterItem === prod.brandName
            ? prod.brandName
            : prod
                ? filterItem === "any"
                : prod
    )
    // filter for sort
    const filterProducts =
        sortItem === "lowest"
            ? filterProductsBrand.sort((a, b) => a.redPrice.localeCompare(b.redPrice, undefined, { numeric: true }))
            : sortItem === "highest"
                ? filterProductsBrand.sort((a, b) => b.redPrice.localeCompare(a.redPrice, undefined, { numeric: true }))
                : filterProductsBrand.sort((a, b) => (a.name > b.name ? 1 : -1))
    // change fun for brand
    const onChangeHandaler = (e) => {
        setFilterItem(e.target.title)
    }
    // change fun for sort
    const onChangeHandalerSort = (e) => {
        setSortItem(e.target.title)
    }

    return (
        <>
            <div className='Title uppercase tracking-[16px] md:tracking-[20px] text-center font-bold text-xl md:text-3xl my-28'>
                {`${params.categorie} ${location.pathname.slice(0, 4) === "/men" ? "Men" : "Women"}`}
            </div>
            <div className='filterBtn mx'>
                <button onClick={() => setIsOpen(true)}>
                    <IoFilterSharp size={25} />
                </button>
                <button className={`${isOpen ? "visible" : "hidden"}`} onClick={() => setIsOpen(!true)}>
                    <IoCloseSharp size={25} />
                </button>
            </div>
            <div className='fullPage mx'>
                <div className={`${isOpen ? "show" : "left"} none`} >
                    <div className='filterItem'>
                        <h2>Brand</h2>
                        <ProductsBrandBox onChangeHandaler={onChangeHandaler} filterItem={filterItem} location={location} />
                    </div>
                    {/**sort filter */}
                    <div className='filterItem'>
                        <h2>Sort by</h2>
                        <div className='inputItem'>
                            <input className='cursor-pointer' value={sortItem} onChange={onChangeHandalerSort} type="radio" title="any" name='2' />
                            <label>All</label>
                        </div>
                        <div className='inputItem'>
                            <input className='cursor-pointer' value={sortItem} onChange={onChangeHandalerSort} type="radio" title="lowest" name='2' />
                            <label htmlFor='asc'>Price (Lowest first)</label>
                        </div>
                        <div className='inputItem'>
                            <input className='cursor-pointer' value={sortItem} onChange={onChangeHandalerSort} type="radio" title="highest" name='2' />
                            <label htmlFor='dsc'>Price (Highest first)</label>
                        </div>
                    </div>
                </div>
                <div className='right'>
                    {filterProducts.map((el, i) => (
                        <Card el={el} key={i} />))}
                </div>
            </div>
        </>
    )
}

export default ProductList
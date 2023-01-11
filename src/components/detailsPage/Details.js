import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { URL } from '../../App'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import './details.scss'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../redux/cartReducer'
import { addToFavCart, removeFavItem } from '../../redux/favoriteReducer'

const Details = () => {
    const [data, setData] = useState([])
    const [openImg, setOpenImg] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const [click, setClick] = useState(false);

    const params = useParams();

    useEffect(() => {
        //api
        const getData = async () => {
            try {
                const response = await axios.get(
                    `${URL}/products/details/${params.id}`
                );
                const data = await response.data;
                setData(data);
            } catch (err) {
                console.log(err)
            }
        }
        getData()
    }, [params]);

    const dispatch = useDispatch();
    const productsFav = useSelector(state => state.favoriteCart.productsFav);
    const item = productsFav.find(item => item.id)

    //input
    const inputDat = [{ id: 1, name: "groupe1", title: "XXL" },
    { id: 2, name: "groupe1", title: "XL" },
    { id: 3, name: "groupe1", title: "L" },
    { id: 4, name: "groupe1", title: "S" }
    ]

    return (
        <div className='detail mx mb-40'>
            <div className='left'>
                <div className='images cursor-pointer'>
                    <img id='first' src={data.imageUrl} onClick={() => setOpenImg(1)} alt='' />
                    <img id='second' src={data.imageSecond} onClick={() => setOpenImg(0)} alt='' />
                </div>
                <div className='mainImg'>
                    <img className='showMd' id="third" src={openImg === 1 ? data.imageUrl : data.imageSecond} alt='' />
                    <img className={`${openImg === 1 ? "showSm" : "hideSm"}`} src={data.imageUrl} onClick={() => setOpenImg(1)} alt='' />
                    <img className='showSm' src={data.imageSecond} onClick={() => setOpenImg(0)} alt='' />
                </div>
            </div>
            <div className='right'>
                <div className='content'>
                    <h2>{data.name}</h2>
                    <h4>{data.brandName}</h4>
                    <h3>{data.redPrice}</h3>
                </div>
                <h2>Size:</h2>
                <div className='size flex'>
                    {inputDat.map((input,i) => (
                        <div>
                        <input type="radio" name={input.name} id={input.id.toString()} value={input.title} />
                        <label htmlFor={input.id.toString()}>{input.title}</label>
                    </div>
                    ))}
                </div>
                <div className='btn'>
                    <div className='quantity'>
                        <button onClick={() => setQuantity((prev) => prev === 1 ? 1 : prev - 1)}>-</button>
                        {quantity}
                        <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
                    </div>
                    <div className='btnFlex'>
                        <button className='addCart' onClick={() => {
                            dispatch(addToCart({
                                id: data.productId,
                                title: data.name,
                                price: data.redPrice,
                                img: data.imageUrl,
                                quantity
                            }))
                        }}>
                            ADD TO CART
                        </button>
                        <button className='fav' onClick={() => setClick((e) => e === false ? true : false)}>
                            {click ? <MdFavorite size={24} color="#D19F9C" onClick={() => dispatch(removeFavItem(item.id))} /> : <MdFavoriteBorder size={24} onClick={() => dispatch(addToFavCart({
                                id: data.productId,
                                title: data.name,
                                img: data.imageUrl,
                                quantity
                            }))} />}
                        </button>
                    </div>
                    <div className='desc'>
                        <h2>Description:</h2>
                        <p >
                            It is a long established fact that a reader
                            will be distracted by the readable content of a page
                            when looking at its layout. The point of using Lorem Ipsum is that it
                            has a more-or-less normal distribution of letters.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details;
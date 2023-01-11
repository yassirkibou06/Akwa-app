import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Gender } from '../../data/fetchData';
import Card from '../card/Card';
import { useLocation } from 'react-router-dom';
import { URL } from '../../App';

const ListSection = () => {
    const [types, setTypes] = useState([]);

    const location = useLocation();

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get(
                    `${URL}/products/list/${location.pathname === "/men" ? Gender.men : Gender.women}/bestsellers`
                );
                setTypes(response.data.slice(0, 9));
                ///console.log(types)
            } catch (err) {
                console.log(err)
            }
        };
        getData();
    }, [location]);

    return (
        <>
            <div className='list-content'>
                <h1 className='text-center font-semibold text-3xl md:text-4xl tracking-[14px] md:tracking-[20px] my-14'>BEST BUYS</h1>
                <div className='grid grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center'>
                    {types.map((el, i) => (
                        <Card el={el} key={i} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default ListSection;
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { Gender } from '../../data/fetchData';
import './shoesSec.scss'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";
import Card from '../card/Card';

const ShoesSec = () => {
    const [items, setItems] = useState([]);

    const location = useLocation();


    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get(
                    `/products/list/${location.pathname === "/men" ? Gender.men : ""}/shoes`
                );
                setItems(response.data.slice(0, 12));
                ///console.log(types)
            } catch (err) {
                console.log(err)
            }
        };
        getData();
    }, [location]);
    return (
        <div className='shoesContent my-10 mx-[50px]'>
            {location.pathname === '/men'
                ? <h1 className='text-center font-semibold text-2xl md:text-4xl tracking-[20px] my-14'>Men's Shoes</h1>
                : <h1 className='text-center font-semibold text-2xl md:text-4xl tracking-[20px] my-14'>Women's Shoes</h1>}
            <>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={20}
                    slidesPerGroup={1}
                    breakpoints={{
                        // when window width is >= 320px
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 10
                        },
                        // when window width is >= 480px
                        480: {
                            slidesPerView: 2,
                            spaceBetween: 40
                        },
                        900: {
                            slidesPerView: 3,
                            spaceBetween: 20
                        }
                    }}
                    loop={true}
                    loopFillGroupWithBlank={true}
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper"
                >
                    {items.map((el) => (
                        <SwiperSlide >
                            <Card el={el} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </>

        </div>
    )
}

export default ShoesSec;
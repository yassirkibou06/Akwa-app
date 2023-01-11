import React,{ useState,useEffect } from 'react'
import axios from 'axios';
import { URL } from '../../App';
import Card from '../card/Card';
import './similar.scss'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

const Similar = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get(
                    `${URL}/products/list/men/bestsellers`
                );
                setItems(response.data.slice(0,13));
            } catch (err) {
                console.log(err)
            }
        };
        getData();
    }, []);

    return (
        <div className=' mx-[40px] my-8'>
            <h1 className='font-semibold text-lg md:text-2xl tracking-[6px] md:tracking-[17px] mb-9'>You May Also Like</h1>
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


export default Similar
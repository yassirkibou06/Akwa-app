import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/scss";
import "swiper/scss/pagination";

import "./heroSlide.scss";
// import required modules
import { Pagination } from "swiper";
import { Link, useLocation } from "react-router-dom";
import { dataSlide } from "../../data/fetchData";

///hero slide
const HeroSlider = () => {
    const location = useLocation();

    return (
        <>
            <div className="mx">
                <Swiper
                    pagination={{
                        dynamicBullets: true,
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper mt-5"
                >
                    {dataSlide.map((e) => (
                        <>
                            {/*//Men */}
                            {location.pathname === '/men' ?
                                e.men.map((el) => (
                                    <SwiperSlide key={el.id} style={{ backgroundImage: `url(${el.image})` }}>
                                        <div className="overlay fixed top-0 left-0 bottom-0 right-0 bg-black/50 z-0"></div>
                                        <div className="content relative">
                                            <h2>{el.title}</h2>
                                            <p>{el.desc}</p>
                                            <Link to={el.link}>Shop now</Link>
                                        </div>
                                    </SwiperSlide>
                                )) :
                                /// Women ///
                                e.women.map((el) => (
                                    <SwiperSlide key={el.id} style={{ backgroundImage: `url(${el.image})` }}>
                                        <div className="overlay fixed top-0 left-0 bottom-0 right-0 bg-black/50 z-0"></div>
                                        <div className="content relative">
                                            <h2>{el.title}</h2>
                                            <p>{el.desc}</p>
                                            <Link to={el.link}>Shop now</Link>
                                        </div>
                                    </SwiperSlide>
                                ))}
                        </>
                    ))}
                </Swiper>
            </div>
        </>
    );
}
export default HeroSlider;

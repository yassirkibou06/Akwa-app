import React from 'react';
import { Link } from 'react-router-dom';
import './Card.scss';

const Card = ({ el }) => {
    return (
        <>
            <Link className='linkCard' to={`/detail/${el.productId}`}>
            <div className='card cardList text-center '>
                <div className='imageAll imgForShoes imageForSim imageList'>
                <span>{el.discount}</span>
                <img src={el.imageUrl} className='mainImg' alt=''/>
                <img src={el.imageSecond} className='secondImg' alt=''/>
                </div>
                <h2 className='my-2 font-semibold text-[13px] md:text-[16px]'>{el.name}</h2>
                <h4 className='mb-2 font-normal text-[12px] md:text-[15px]'>{el.brandName}</h4>
                <div className='prices flex justify-center gap-11'>
                    <h3 className='text-regal-borown font-semibold'>{el.redPrice}</h3>
                    <h3 className='line-through font-light'>{el.whitePrice}</h3>
                </div>
            </div>
            </Link>
        </>
    )
}

export default Card;
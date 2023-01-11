import React from 'react';
import { categories } from '../../data/fetchData';
import { Link, useLocation } from 'react-router-dom';


const CateSec = () => {
  const location = useLocation();

  return (
    <div className='grid grid-cols-5 gap-5 justify-items-center'>
      {categories.map((item) => (
        <>
          {location.pathname === '/men' ? item.men.map((e) => (
            <Link to={`/${e.cate}/${e.name}`} className='grid justify-items-center'>
              <div key={e.id} className='w-14 h-14 md:w-20 md:h-20  rounded-full drop-shadow-md' style={{ backgroundImage: `url("${e.image}")`, backgroundSize: 'cover' }}></div>
              <h2 className='font-medium text-[12px] md:text-[15px] uppercase pt-3'>{e.name}</h2>
            </Link>
          )) : item.women.map((e) => (
            <Link to={`/${e.cate}/${e.name}`} className='grid justify-items-center'>
              <div key={e.id} className='w-14 h-14 md:w-20 md:h-20  rounded-full drop-shadow-md' style={{ backgroundImage: `url("${e.image}")`, backgroundSize: 'cover' }}></div>
              <h2 className='font-medium text-[15px] uppercase pt-3'>{e.name}</h2>
            </Link>
          ))}
        </>
      ))}
    </div>
  )
}

export default CateSec;
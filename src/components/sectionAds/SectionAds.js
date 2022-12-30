import React from 'react';
import './sectionAds.scss';
import { Link } from 'react-router-dom';
import Img from '../../images/pexels-mart-production-7679725.jpg';

const SectionAds = () => {
  return (
    <div className='mx my-16'>
    <Link to='/men/jackets' >
    <div className='contentAds' style={{backgroundImage: `url("${Img}")`}}>
        <h2>INVITING TEXTURES AT UP TO <span>60% OFF</span></h2>
    </div>
    </Link>
    </div>
  )
}

export default SectionAds;
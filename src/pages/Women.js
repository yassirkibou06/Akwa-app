import React from 'react'
import CateSec from '../components/cateSection/CateSec';
import HeroSlider from '../components/heroSlide/HeroSlider';
import ListSection from '../components/listSection/ListSection';
import SectionAds from '../components/sectionAds/SectionAds';
import ShoesSec from '../components/shoesSection/ShoesSec';

const Women = () => {
  return (
    <>
      <HeroSlider />
      <div className='mx my-12'>
        <CateSec />
      </div>
      <ListSection />
      <SectionAds />
      <ShoesSec />
    </>
  )
}

export default Women;

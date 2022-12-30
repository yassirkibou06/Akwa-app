import React from 'react'
import HeroSlider from '../components/heroSlide/HeroSlider';
import CateSec from '../components/cateSection/CateSec';
import ListSection from '../components/listSection/ListSection';
import SectionAds from '../components/sectionAds/SectionAds';
import ShoesSec from '../components/shoesSection/ShoesSec';

const Men = () => {
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

export default Men;
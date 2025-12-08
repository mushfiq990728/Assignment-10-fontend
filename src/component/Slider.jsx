import React from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/navigation';

// import './styles.css';


import { Navigation } from 'swiper/modules';

import i1 from "../assets/1.jpeg"
import i2 from "../assets/2.jpeg"
import i3 from "../assets/3.jpeg"
const Slider = () => {
    return (
        <div>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide><img className='w-full h-[700px] object-cover' src={i1} alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-full h-[700px] object-cover' src={i2} alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-full h-[700px] object-cover' src={i3} alt="" /></SwiperSlide>
        
      </Swiper>
        </div>
    );
};

export default Slider;
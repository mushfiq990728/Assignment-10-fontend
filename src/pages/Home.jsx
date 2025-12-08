import React from 'react';
import Slider from '../component/Slider';
import PopulerSection from '../component/PopulerSection';
import ExpertVets from '../component/ExpertVets';
import WinterCareTips from '../component/WinterCareTips';

const Home = () => {
    return (
        <div>
        <Slider></Slider>
        <PopulerSection></PopulerSection>
        <ExpertVets></ExpertVets>
        <WinterCareTips></WinterCareTips>
        </div>
    );
};

export default Home;
import React from 'react';
import bgImg from '../assets/images/hero_bg.png';
import './Hero.css';

function Hero() {
    return (
        <div className="Hero h-screen m-auto max-w-[1152px] pt-20">
            <h1 className="text-3xl font-bold underline"> Hello world! </h1>
            <img src={bgImg} alt="background" className="w-max block" />
        </div>
    );
}

export default Hero;

import React from 'react';
import './Hero.css';

function Hero() {
    return (
        <div className="hero h-screen m-auto max-w-[1152px] py-64 px-3 sm:px-10 md:px-24 text-center border-b-2 border-white border-opacity-50 border-solid">
            <div className="hero-content__wrapper p-1.5 bg-gray-700 bg-opacity-25">
                <h1 className="hero__title text-3xl md:text-4xl">Hello, there. I&apos;m Andy</h1>
                <p className="hero__subtitle text-md opacity-80">
                    I&apos;m an American web developer living in Yokohama, Japan
                </p>
            </div>
            {/* TODO: Contact me button goes here */}
        </div>
    );
}

export default Hero;

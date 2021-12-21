import React from 'react';
import { Typography } from '@mui/material';
import ActionButton from './ActionButton';
import './Hero.css';

function Hero() {
    return (
        <div className="Hero h-screen m-auto max-w-[1152px] py-64 px-3 sm:px-10 md:px-24 text-center border-b-2 border-white border-opacity-50 border-solid">
            <div className="Hero-content__wrapper p-1.5 bg-gray-700 bg-opacity-25 mb-16">
                <Typography variant="h4" component="h1">
                    Hello, there. I&apos;m Andy
                </Typography>
                <Typography variant="subtitle1" className="opacity-60">
                    I&apos;m an American web developer living in Yokohama, Japan
                </Typography>
            </div>
            <ActionButton content="Let's Get Started" styles={{ color: 'rgba(255,255,255,0.9)' }} />
        </div>
    );
}

export default Hero;

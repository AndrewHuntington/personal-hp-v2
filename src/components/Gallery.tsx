import React from 'react';
import { Typography } from '@mui/material';
import GalleryCarousel from './GalleryCarousel';

export default function Gallery() {
    return (
        <div className="Gallery h-96">
            <div className="Gallery-title mx-auto w-max mb-10 pt-8">
                <Typography variant="h4" component="h2">
                    Gallery
                </Typography>
            </div>
            <GalleryCarousel />
        </div>
    );
}

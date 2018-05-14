// main page image gallery

import React from 'react';
import '../css/gallery.css';
import GalleryItem from './GalleryItem';

const Gallery = ({ galleryItems }) => {
    return (
        <div className='gallery-wrapper'>
            <ul>
                {galleryItems.map((item, index) => {
                    return <GalleryItem
                        key={index}
                        url={item.image_url}
                        alt={item.title}
                        type={item.type}
                    />
                })}
            </ul>
        </div>
    );
}

export default Gallery;

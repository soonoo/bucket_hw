// main page image gallery

import React from 'react';
import '../css/gallery.css';
import GalleryItem from './GalleryItem';
import GalleryItemType from '../model/GalleryItemType';

const Gallery = ({ galleryItems, itemType, onImageClick }) => {
    return (
        <div className='gallery-wrapper'>
            <ul>
                {galleryItems.map((item, index) => {
                    if(itemType !== GalleryItemType.All && itemType !== GalleryItemType[item.type]) return null;
                    return <GalleryItem
                        handleClick={onImageClick}
                        id={index}
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

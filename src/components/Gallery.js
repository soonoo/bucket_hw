// main page image gallery

import React from 'react';
import '../css/gallery.css';
import GalleryItem from './GalleryItem';
import GalleryItemType from '../model/GalleryItemType';

const Gallery = ({ galleryItems, itemType, onImageClick, onToggleBookmark, bookMarkIndex, bookmarkOnly }) => {
    return (
        <div className='gallery-wrapper'>
            <ul>
                {galleryItems.map((item, index) => {
                    if(itemType !== GalleryItemType.All && itemType !== GalleryItemType[item.type]) return null;
                    if(bookmarkOnly && bookMarkIndex.getItem(item.id) === 'false') return null;
                    return <GalleryItem
                            isBookmarked={bookMarkIndex.getItem(item.id)}
                            onToggleBookmark={onToggleBookmark}
                            handleClick={onImageClick}
                            id={item.id}
                            key={index}
                            url={item.image_url}
                            alt={item.title}
                            type={item.type} />
                })}
            </ul>
        </div>
    );
}

export default Gallery;

// image component in Gallery.js

import React from 'react';
import GalleryItemTypeBadge from '../components/GalleryItemTypeBadge';
import GalleryItemBookmarkBadge from '../components/GalleryItemBookmarkBadge';
import GalleryItemType from '../model/GalleryItemType';

const GalleryItem = ({ url, alt, type }) => {
    return (
        <li>
            <div className='gallery-item'>
                <div>
                    <GalleryItemTypeBadge>{GalleryItemType[type]}</GalleryItemTypeBadge>
                    <GalleryItemBookmarkBadge />
                    <img src={url} alt={alt} />
                </div>
            </div>
        </li>
    );
}

export default GalleryItem;

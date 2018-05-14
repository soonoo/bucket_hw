// image component in Gallery.js

import React from 'react';
import GalleryItemTypeBadge from '../components/GalleryItemTypeBadge';
import GalleryItemBookmarkBadge from '../components/GalleryItemBookmarkBadge';

const GalleryItem = ({ url, alt, type }) => {
    const GalleryItemType = Object.freeze({
        "Project": "집들이",
        "Production": "제품",
        "Card": "사진",
        "Exhibition": "카드",
    });

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

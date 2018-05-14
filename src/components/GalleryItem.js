// image component in Gallery.js

import React from 'react';
import GalleryItemTypeBadge from '../components/GalleryItemTypeBadge';
import GalleryItemBookmarkBadge from '../components/GalleryItemBookmarkBadge';
import GalleryItemType from '../model/GalleryItemType';

const GalleryItem = ({ url, alt, type, id, handleClick }) => {
    return (
        <li>
            <div className='gallery-item'>
                <div>
                    <GalleryItemTypeBadge>{GalleryItemType[type]}</GalleryItemTypeBadge>
                    <GalleryItemBookmarkBadge id={id} />
                    <img onClick={() => handleClick(id)} src={url} alt={alt} />
                </div>
            </div>
        </li>
    );
}

export default GalleryItem;

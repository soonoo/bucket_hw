// 메인 페이지 이미지 ui 컴포넌트

import React from 'react';
import GalleryItemTypeBadge from '../components/GalleryItemTypeBadge';
import GalleryItemBookmarkBadge from '../components/GalleryItemBookmarkBadge';
import GalleryItemType from '../model/GalleryItemType';

const GalleryItem = ({ url, alt, type, id, handleClick, onToggleBookmark, isBookmarked }) => {
    return (
        <li>
            <div className='gallery-item'>
                <div>
                    <GalleryItemTypeBadge>{GalleryItemType[type]}</GalleryItemTypeBadge>
                    <GalleryItemBookmarkBadge id={id} isBookmarked={isBookmarked} onToggleBookmark={onToggleBookmark} />
                    <img onClick={() => handleClick(id)} src={url} alt={alt} />
                </div>
            </div>
        </li>
    );
}

export default GalleryItem;

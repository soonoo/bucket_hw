// 북마크 아이콘

import React from 'react';

const GalleryItemBookmarkBadge = ({ onToggleBookmark, isBookmarked, id }) => {
    return (
        <span
            onClick={() => onToggleBookmark(id)}
            className={isBookmarked === 'true' ?
                'bookmark-badge bookmark-on' : 'bookmark-badge bookmark-off'}>
        </span>
    );
}

export default GalleryItemBookmarkBadge;

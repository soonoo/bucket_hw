import React from 'react';

const GalleryItemBookmarkBadge = ({ isActivated }) => {
    const className = isActivated ? 'bookmark-badge bookmark-on' : 'bookmark-badge bookmark-off';

    return (
        <span className={className}></span>
    );
};

export default GalleryItemBookmarkBadge;

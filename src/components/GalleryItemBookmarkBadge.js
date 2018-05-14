import React from 'react';

const GalleryItemBookmarkBadge = ({ isActivated }) => {
    const className = isActivated ? 'bookmark-badge bookmark-on' : 'bookmark-badge bookmark-off';

    return (
        <a className={className}></a>
    );
};

export default GalleryItemBookmarkBadge;

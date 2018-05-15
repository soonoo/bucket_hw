// 이미지 컴포넌트 내 사진 타입 뱃지 컴포넌트

import React from 'react';

const GalleryItemTypeBadge = ({ children }) => {
    return (
        <span className='gallery-badge'>{children}</span>
    );
};

export default GalleryItemTypeBadge;

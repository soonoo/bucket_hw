// 사진 카테고리 버튼

import React from 'react';

const FilterItem = ({ type, itemType, handleClick }) => {
    const className = (itemType === type[1]) ? 'header-item link-on' : 'header-item';
    return (
        <div onClick={() => handleClick(type[0])} className={className}>
            <span>{type[1]}</span>
        </div>
    );
};

export default FilterItem;

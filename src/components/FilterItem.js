// button component that filters images

import React from 'react';

const FilterItem = ({ title, isEnabled }) => {
    const className = isEnabled ? 'header-item link-on' : 'header-item';
    return (
        <div className={className}>
            <span>{title}</span>
        </div>
    );
};

export default FilterItem;

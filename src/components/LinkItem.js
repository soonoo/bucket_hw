// wrapper component for react router Link component

import React from 'react';
import '../css/header.css';

const LinkItem = ({ title, path, enabled, router }) => {
    const className = enabled ? 'header-item link-on' : 'header-item';
    return (
        <div className={className} onClick={() => router(path, enabled)}>
            <span>{title}</span>
        </div>
    );
};

export default LinkItem;

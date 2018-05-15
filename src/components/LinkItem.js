// 화면 좌측 상단 링크 컴포넌트

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

// wrapper component for react router Link component

import React from 'react';
import { Link } from 'react-router-dom';
import '../css/header.css';

const LinkItem = ({ title, path, isEnabled }) => {
    const className = isEnabled ? 'header-item link-on' : 'header-item';
    return (
        <div className={className}>
            <Link to={path}>
                <span>{title}</span>
            </Link>
        </div>
    );
};

export default LinkItem;

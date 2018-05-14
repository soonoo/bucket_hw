// wrapper component containing LinkItem/FilterItem

import React from 'react';

const HeaderBar = ({ children, justify='start' }) => {
    const className = (justify === 'start') ? 'header-bar flex-left' : 'header-bar flex-center';
    return (
        <nav className={className}>{children}</nav>
    );
};

export default HeaderBar;

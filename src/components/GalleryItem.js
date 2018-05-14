// image component in Gallery.js

import React from 'react';

export default class GalleryItem extends React.Component {
    render() {
        return (
            <li>
                <div className='gallery-item'>
                    <img src={this.props.url} alt={this.props.alt}/>
                </div>
            </li>
        );
    }
}

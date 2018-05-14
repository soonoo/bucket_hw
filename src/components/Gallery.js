// main page image gallery

import React from 'react';
import '../css/gallery.css';
import GalleryItem from './GalleryItem';

const CONTENTS_URL = "https://s3.ap-northeast-2.amazonaws.com/bucketplace-coding-test/feed/page_";

export default class Gallery extends React.Component {
    constructor() {
        super();
        this.state = {
            page: 1,
            galleryItems: [],
        };
    }

    render() {
        return (
            <div className='gallery-wrapper'>
                <ul>
                    {this.state.galleryItems.map((item, index) => {
                        return <GalleryItem
                                key={index}
                                url={item.image_url} 
                                alt={item.title}
                                />
                    })}
                </ul>
            </div>
        );
    }

    async componentDidMount() {
        const response = await fetch(`${CONTENTS_URL}${this.state.page}.json`);
        const json = await response.json();

        this.setState((prev) => ({
            galleryItems: [...prev.galleryItems, ...json],
            page: prev.page + 1,
        }));
    }

    async loadImages() {

    }
}

import React, { Component } from 'react';
import HeaderBar from './components/HeaderBar';
import LinkItem from './components/LinkItem';
import FilterItem from './components/FilterItem';
import Gallery from './components/Gallery';
import GalleryItemType from './model/GalleryItemType';
import './App.css';

const CONTENTS_URL = "https://s3.ap-northeast-2.amazonaws.com/bucketplace-coding-test/feed/page_";

class App extends Component {
  constructor() {
    super();
    this.state = {
      isFetchingImage: false,
      page: 1,
      galleryItems: [],
      galleryItemType: GalleryItemType.All,
    };
    
    this.loadImages = this.loadImages.bind(this);
    this.onFilterClick = this.onFilterClick.bind(this);
  }

  render() {
    return (
      <div className="App">
        <HeaderBar>
          <LinkItem title={'전체보기'} path={'/'} isEnabled />
          <LinkItem title={'북마크'} path={'/book-mark'} />
        </HeaderBar>
        <HeaderBar justify={'center'} >
          {Object.entries(GalleryItemType).map((item, index) => {
              return <FilterItem
                        key={index}
                        type={item}
                        handleClick={this.onFilterClick}
                        itemType={this.state.galleryItemType} />;
          })}
        </HeaderBar>
        <Gallery
          galleryItems={this.state.galleryItems}
          itemType={this.state.galleryItemType} />
      </div>
    );
  }


  async componentDidMount() {
    this.loadImages();
    window.addEventListener('scroll', this.loadImages);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.loadImages);
  }

  async loadImages() {
    document.documentElement.scrollTop
    const response = await fetch(`${CONTENTS_URL}${this.state.page}.json`);
    const json = await response.json();

    this.setState((prev) => ({
      galleryItems: [...prev.galleryItems, ...json],
      page: prev.page + 1,
    }));
  }

  onFilterClick(type) {
    console.log(type);
    this.setState({
      galleryItemType: GalleryItemType[type],
    });
  }
}

export default App;

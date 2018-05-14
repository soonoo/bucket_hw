import React, { Component } from 'react';
import HeaderBar from './components/HeaderBar';
import LinkItem from './components/LinkItem';
import FilterItem from './components/FilterItem';
import Gallery from './components/Gallery';
import './App.css';

const CONTENTS_URL = "https://s3.ap-northeast-2.amazonaws.com/bucketplace-coding-test/feed/page_";

const GalleryItemType = Object.freeze({
  "All": "모두",
  "Project": "집들이",
  "Production": "제품",
  "Card": "사진",
  "Exhibition": "카드",
});

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
  }

  render() {
    return (
      <div className="App">
        <HeaderBar>
          <LinkItem title={'전체보기'} path={'/'} isEnabled />
          <LinkItem title={'북마크'} path={'/book-mark'} />
        </HeaderBar>
        <HeaderBar justify={'center'}>
          <FilterItem title={'모두'} isEnabled={} />
          <FilterItem title={'사진'} isEnabled={} />
          <FilterItem title={'제품'} isEnabled={} />
          <FilterItem title={'집들이'} isEnabled={} />
          <FilterItem title={'기획전'} isEnabled={} />
        </HeaderBar>
        <Gallery galleryItems={this.state.galleryItems}/>
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
}

export default App;

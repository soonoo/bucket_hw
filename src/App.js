import React, { Component } from 'react';
import HeaderBar from './components/HeaderBar';
import LinkItem from './components/LinkItem';
import FilterItem from './components/FilterItem';
import Gallery from './components/Gallery';
import GalleryItemType from './model/GalleryItemType';
import Modal from './components/Modal';
import BookmarkToast from './components/BookmarkToast';
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
      modalIndex: -1,
      bookMarkIndex: {},
      bookmarkOnly: false,
    };

    this.loadImages = this.loadImages.bind(this);
    this.onFilterClick = this.onFilterClick.bind(this);
    this.onImageClick = this.onImageClick.bind(this);
    this.onModalClick = this.onModalClick.bind(this);
    this.toggleBookmark = this.toggleBookmark.bind(this);
    this.route = this.route.bind(this);
  }

  render() {
    return (
      <div className="App">
        <HeaderBar>
          <LinkItem title={'전체보기'} path={'/'} router={this.route} enabled={!this.state.bookmarkOnly}/>
          <LinkItem title={'북마크'} path={'/book-mark'} router={this.route} enabled={this.state.bookmarkOnly} />
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
          onImageClick={this.onImageClick}
          onToggleBookmark={this.toggleBookmark}
          galleryItems={this.state.galleryItems}
          itemType={this.state.galleryItemType}
          bookMarkIndex={this.state.bookMarkIndex}
          bookmarkOnly={this.state.bookmarkOnly} />
        <Modal
          modalIndex={this.state.modalIndex}
          items={this.state.galleryItems}
          handleClick={this.onModalClick} />
        <BookmarkToast />
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
    if ((window.innerHeight + window.scrollY) < document.body.offsetHeight) return;
    if (this.state.isFetchingImage) return;

    this.setState({
      isFetchingImage: true,
    });

    const response = await fetch(`${CONTENTS_URL}${this.state.page}.json`);
    const json = await response.json();

    if (json.length === 0) {
      this.setState({
        isFetchingImage: true,
      });
      return;
    }

    for(let item of json) {
      let bookMark = localStorage.getItem(item.id);
      if(bookMark === null || bookMark === undefined) localStorage.setItem(item.id, 'false');
    }

    this.setState((prev) => ({
      galleryItems: [...prev.galleryItems, ...json],
      page: prev.page + 1,
      isFetchingImage: false,
      bookMarkIndex: localStorage,
    }));
  }

  onFilterClick(type) {
    this.setState({
      galleryItemType: GalleryItemType[type],
    });
  }

  onImageClick(id) {
    this.setState({
      modalIndex: id,
    });
  }

  onModalClick() {
    this.setState({
      modalIndex: -1,
    })
  }

  toggleBookmark(id) {
    const value = (this.state.bookMarkIndex.getItem(id) === 'false') ? 'true' : 'false';
    localStorage.setItem(id, value);
    this.setState({
        bookMarkIndex: localStorage,
    });
  }

  route(path, enabled) {
    if(enabled) return;
    this.setState({
      bookmarkOnly: path === '/book-mark',
    }); 
    window.history.pushState({}, '', path);
  }
}

export default App;

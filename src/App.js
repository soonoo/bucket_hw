import React, { Component } from 'react';
import HeaderBar from './components/HeaderBar';
import LinkItem from './components/LinkItem';
import FilterItem from './components/FilterItem';
import Gallery from './components/Gallery';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderBar>
          <LinkItem title={'전체보기'} path={'/'} isEnabled />
          <LinkItem title={'북마크'} path={'/book-mark'} />
        </HeaderBar>
        <HeaderBar justify={'center'}>
          <FilterItem title={'모두'} isEnabled/>
          <FilterItem title={'사진'} />
          <FilterItem title={'제품'} />
          <FilterItem title={'집들이'} />
          <FilterItem title={'기획전'} />
        </HeaderBar>
        <Gallery />
      </div>
    );
  }
}

export default App;

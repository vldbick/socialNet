import React from 'react';
import './App.css';
import Header from '../header/Header';
import Nav from '../nav/Nav';
import Main from '../main/Main';
import Ads from '../ads/Ads';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className='app-wrapper'>
      <BrowserRouter>
        <Header></Header>
        <Nav></Nav>
        <Main></Main>
        <Ads></Ads>
      </BrowserRouter>
    </div>
  );
}

export default App;

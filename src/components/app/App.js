import React from 'react';
import './App.css';
import Header from '../header/Header';
import Nav from '../nav/Nav';
import Main from '../main/Main';

function App() {
  return (
    <div className='app-wrapper'>
      <Header></Header>
      <Nav></Nav>
      <Main></Main>
    </div>
  );
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Appbar from './Component/Appbar';
import DisplayLock from './Component/DisplayLock';
import Items from './Component/Items';
import Paginations from './Component/Pageinate';
import Footer from './Component/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Appbar/>
      <DisplayLock/>
      {/* <Items/> */}
      <Paginations />
      <Footer/>
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
      </div>
    );
  }
}

export default App;

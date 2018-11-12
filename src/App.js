import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Appbar from './Component/Appbar';
import DisplayLock from './Component/DisplayLock';
import Items from './Component/Items';
import Paginations from './Component/Pageinate';
import Footer from './Component/Footer';
import Details from './Component/Details';

class App extends Component {
  render() {
    const Show =(
      <DisplayLock/>
    )
    return (
      <div className="App">
      <Appbar/>
      <div style={{marginTop:100}}>
      {/* {Show} */}
      {/* <Items/> */}
      {/* <Paginations /> */}
      <Details/>
      <Footer/>

      </div>
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

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Appbar from './Component/Appbar';
import DisplayLock from './Component/DisplayLock';
import Items from './Component/Items';
import Paginations from './Component/Pageinate';
import Footer from './Component/Footer';
import AppMean from './Component/AppMean';
import  {BrowserRouter as Router ,  Route, Link} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <Route  exact path="/" history={this.props.history} component={''}/>
        <Route  path="/Men" history={this.props.history} component={''}/>
        <Route  path="/Women" history={this.props.history} component={''}/>
        <Route  path="/About-us" history={this.props.history} component={''}/>
        <Route  path="/New-Arival" history={this.props.history} component={''}/>
        </div>
    </BrowserRouter>   
    );
  }
}

export default App;

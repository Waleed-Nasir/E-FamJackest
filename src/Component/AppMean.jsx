import React, { Component } from 'react';
import Appbar from './Appbar';
import DisplayLock from './DisplayLock';
import Items from './Items';
import Paginations from './Pageinate';
import Footer from './Footer';
import Details from './Details';

class AppMean extends Component {
  render() {
    var path = window.location.pathname.split('/')[1]
    var Show =('');
    if(path === ""){
    Show = (<DisplayLock history={this.props.history}/>)
    }else if(path === "Details"){
    Show = <Details history={this.props.history}/> 
    }
    return (
      <div className="App">
      <Appbar history={this.props.history}/>
      <div style={{marginTop:100}}>
      {Show}
      {/* <Items/> */}
      {path !== "Details" ? <Paginations history={this.props.history} />:''}
      {/* <Details/> */}
      <Footer/>

      </div>
      </div>
    );
  }
}


export default AppMean;

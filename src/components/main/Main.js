import React, { Component } from 'react';
import User from './User.js';
import Cafe from './Cafe.js';
import CatContainer from './CatContainer.js';
import '../../Stylesheets/main.scss';

export default class Main extends Component {

  state={
    cafeCat: ""
  }

  handleCatClick= cat =>{
    console.log(cat);
    this.setState({
      cafeCat:cat
    })
  }

  handleCafeCatClick= cat => {
    console.log('momo',cat);
  }

  render() {
    return (
      <div className="main">
      <User/>
      <Cafe
      cat={this.state.cafeCat}
      handleCatClick={this.handleCafeCatClick}/>

      <CatContainer
      cats={this.props.cats}
      handleCatClick={this.handleCatClick}/>
      </div>
    );
  }

}

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
    this.setState({
      cafeCat:cat
    })
  }

  render() {
    return (
      <div className="main">
      <User/>
      <Cafe
      cat={this.state.cafeCat}/>

      <CatContainer
      cats={this.props.cats}
      handleCatClick={this.handleCatClick}/>
      </div>
    );
  }

}

import React, { Component } from 'react';
import User from './User.js';
import Cafe from './Cafe.js';
import CatContainer from './CatContainer.js';
import Nav from '../nav/Nav.js';
import '../../Stylesheets/main.scss';

export default class Main extends Component {

  state={
    cafeCat: "",
    username: ""
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
      <Nav/>
      <User current_user={this.props.current_user}/>
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

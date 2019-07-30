import React, { Component } from 'react';
import {Line} from 'rc-progress';

class Cat extends Component {


conditionalCat = () => {
  if (this.props.className === 'side-bar-cat') {
    return (
      <div className = {this.props.className}>
      <img onClick = {() => {this.props.handleCatClick(this.props.cat)}}
      src = {this.props.cat.cat_img}
      alt = 'this a cat'/>
      <h1>{this.props.cat.name}</h1>
      <Line percent={this.props.cat.affectionate+10} strokeWidth="10" strokeColor="#FBCDD0" trailColor="#D9D9D9" strokeLinecap="butt"/>
      </div>
    )
  }


  else if (this.props.className === 'cafe-cat'){
    return (
      <div className = {this.props.className} >
      <img onClick = {() => {this.props.handleCatClick(this.props.cat)}}
      src = {this.props.cat.cat_img}
      alt = 'this a cafe cat' />
      <h1>{this.props.cat.personality}</h1>
      </div>
      )
  }}

  render(){
    return(
      <cat>
      {this.conditionalCat()}
      </cat>
    )}

  }

export default Cat;

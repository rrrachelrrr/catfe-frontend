import React, { Component } from 'react';

class Cat extends Component {

  render() {

    return (
      <div className={this.props.className} >
      <img
      onClick={()=> {this.props.handleCatClick(this.props.cat)}}
      src={this.props.cat.cat_img}
      alt='this a cat'/>
      <h1> {this.props.cat.name} </h1>
      <br/>
      </div>
    )
  }

}

export default Cat;
import React, { Component } from 'react';
import {Line} from 'rc-progress';

class Cat extends Component {

  date = () => {
    console.log(this.props);
    fetch('http://localhost:3000/feed',{
      method: 'POST',
      headers: {
        'Authorization': localStorage.token,
        'content-type': 'application/json'
      },
      body: JSON.stringify(
      {cat_id: this.props.cat.id}
      )
    }).then(resp=> resp.json())
    .then(data=> {
      console.log(data);
    this.props.handleDateMeButton(data)
  })
  // .then(fetch(`http://localhost:3000/cat_dates/${this.state.catDateId}`)
  // .then(resp=> resp.json())
  // .then(data=>{
  //   this.setState({
  //     affectionate:data.affectionate
  //   })
  //   this.props.handleDateMeButton(data.affectionate)
  // }
  // ))
  // .then(() => this.props.handleDateMeButton(this.state.affectionate))



  }

conditionalCat = () => {
  if (this.props.className === 'side-bar-cat') {
    return (
      <div className = {this.props.className}>
      <img onClick = {() => {this.props.handleCatClick(this.props.cat)}}
      src = {this.props.cat.cat_img}
      alt = 'this a cat'/>
      <h1>{this.props.cat.name}</h1>
      <Line percent={this.props.cat.affectionate} strokeWidth="10" strokeColor="#FBCDD0" trailColor="#D9D9D9" strokeLinecap="round"/>
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
      <button onClick={this.date}>Date me?</button>
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

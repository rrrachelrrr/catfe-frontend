import React, { Component } from 'react';
import {Line} from 'rc-progress';

class Cat extends Component {

state={
  domAffectionate: ''
}

  date = () => {
    // console.log(this.props);
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
      this.setState({domAffectionate:data.affectionate})
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
      <h1>affectionate:{this.state.domAffectionate}</h1>
      </div>
    )
  }
  // <h1>affectionate amount:{this.state.domAffectionate}</h1>

  else if (this.props.className === 'cafe-cat'){
    return (
      <div className = {this.props.className} >
      <img onClick = {() => {this.props.handleCatClick(this.props.cat)}}
      src = {this.props.cat.cat_img}
      alt = 'this a cafe cat' />
            <Line percent={this.state.domAffectionate} strokeWidth="10" strokeColor="#FBCDD0" trailColor="#D9D9D9" strokeLinecap="round"/>
      <button onClick={this.date}>Date me? Feed me?</button>
      </div>
      )
  }}

  render(){
    console.log("meow",this.state)
    return(
      <cat>
      {this.conditionalCat()}
      </cat>
    )}

  }

export default Cat;

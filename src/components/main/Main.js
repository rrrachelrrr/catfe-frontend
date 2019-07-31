import React, { Component } from 'react';
import User from './User.js';
import Cafe from './Cafe.js';
import CatContainer from './CatContainer.js';
import Nav from '../nav/Nav.js';
import '../../Stylesheets/main.scss';

export default class Main extends Component {

  state={
    cafeCat: "",
    username: "",
    catName: "",
    catAge: "",
    catBreed: "",
    catPersonality: "",
    catAdopted: "",
    catOwner: "",
    catAffectionate: "",
    catFavoriteTreat: "",
    gold: ""
  }


  handleCatClick= cat =>{
    this.setState({
      cafeCat:cat,
      catName: "",
      catAge: "",
      catBreed: "",
      catPersonality: "",
      catAdopted: "",
      catOwner: "",
      catAffectionate: "",
      catFavoriteTreat: ""
    })
  }

  handleCafeCatClick= cat => {
    this.setState({
      catName: cat.name,
      catAge: cat.age,
      catBreed: cat.breed,
      catPersonality: cat.personality,
      catAdopted: cat.adopted,
      catOwner: cat.owner,
      catAffectionate: cat.affectionate,
      catFavoriteTreat: cat.favorite_treat
    })
  }

  handleTreatClick = e => {
    if (e.className === this.state.catFavoriteTreat){
      this.setState({
        catAffectionate: this.state.catAffectionate + 15
      })
    }
    else this.setState({
      catAffectionate: this.state.catAffectionate + 10
    })
  }

  render() {
    console.log(this.state)
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

        <div className="cat-info">
          <h4> {this.state.catName} </h4>
          <h4> {this.state.catBreed} </h4>
          <h4> {this.state.catPersonality} </h4>
        </div>

        <div onClick= {(event) => this.handleTreatClick(event.target)}className="treats">
          <h3 className="shrimp">🍤</h3>
          <h3 className="chicken">🐔</h3>
          <h3 className="seafood">🐟</h3>
          <h3 className="beef">🥩</h3>
        </div>
      </div>
    );
  }

}

import React, { Component } from 'react';
import Cat from './Cat.js';

class Cafe extends Component {


  render() {
    // console.log(this.props)
    const img= 'https://image.freepik.com/free-vector/coffee-shop-flat-design_23-2147539487.jpg'

    return (
      <div>
        <img className='cafe' src={img} alt='a cafe'/>
        <Cat
        className="cafe-cat"
        cat={this.props.cat}
        handleCatClick={this.props.handleCatClick}
        handleDateMeButton={this.props.handleDateMeButton}
        affectionate={this.props.catAffectionate}
        />
      </div>
    );
  }

}

export default Cafe;

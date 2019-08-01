import React, { Component } from 'react';
import Cat from './Cat.js';

class CatContainer extends Component {

  loadCats= () => {
    return this.props.cats.map(cat => {
      return (<Cat
      className='side-bar-cat'
      key={cat.id}
      cat={cat}
      handleDateMeButton={this.props.handleDateMeButton}
      handleCatClick={this.props.handleCatClick}
      affectionate={this.props.catAffectionate}/>)
    })
  }


  render() {
    // console.log("cat container", this.props)
    return (
      <div>
      {this.loadCats()}
      </div>

    );
  }

}

export default CatContainer;

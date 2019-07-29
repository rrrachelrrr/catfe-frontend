import React, { Component } from 'react';
import Cat from './Cat.js';

class CatContainer extends Component {

  loadCats= () => {
    return this.props.cats.map(cat => {
      return (<Cat
      className='side-bar-cat'
      key={cat.id}
      cat={cat}
      handleCatClick={this.props.handleCatClick}/>)
    })
  }


  render() {
    return (
      <div>
      Hello from cat container
      {this.loadCats()}
      </div>

    );
  }

}

export default CatContainer;

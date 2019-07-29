import React from 'react';
import FrontPage from './components/frontPage/FrontPage.js';
import Nav from './components/nav/Nav.js';
import Main from './components/main/Main.js';
// import logo from './logo.gif';
import './App.css';

class App extends React.Component {

  state={
    cats: [],
    current_user: ''
  }

  componentDidMount(){
    fetch('http://localhost:3000/cats')
    .then(resp => resp.json())
    .then(data => this.setState({
      cats:data
    }))
  }


  render(){
  return (
    <div className="App">
    <FrontPage/>
    <Nav/>
    <Main cats={this.state.cats}/>
    </div>
  );
}
}

export default App;

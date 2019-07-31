import React from 'react';
import FrontPage from './components/frontPage/FrontPage.js';
import SignupPage from './components/frontPage/SignupPage.js';
import Main from './components/main/Main.js';
// import logo from './logo.gif';
import { Switch, Route } from 'react-router-dom'
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

    fetch('http://localhost:3000/current_user', {
      headers: { 'Authorization': localStorage.token } } )
      .then(resp => resp.json())
      .then(data => this.setState({
        current_user: data
      }))
  }


  render(){
    return (
      <Switch>
      { localStorage.token ? <Route
        path="/catfe"
        render={ (routerProps) => <Main cats={this.state.cats} current_user={this.state.current_user} {...routerProps}/>} /> : null}
      <Route
        path="/"
        render={ (routerProps) => <FrontPage {...routerProps}/>} />
      </Switch>
    )
  }
}

export default App;

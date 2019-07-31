import React, { Component } from 'react';
import '../../Stylesheets/frontpage.scss';
import SignupPage from './SignupPage.js'
import {withRouter} from 'react-router-dom'



class FrontPage extends Component {


  state={
    username: '',
    password: '',
    seen: false
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    fetch('http://localhost:3000/login'
    ,{
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'accept': 'application/json'
      },
      body: JSON.stringify(this.state)
    })
    .then(res=> res.json())
    .then(data => {
      if (data.token){
        localStorage.token = data.token;
        this.props.history.push('/catfe')
      }
    })
  }

  togglePop = () => {
    this.setState({
      seen: !this.state.seen
    });
  };


  render() {
    return (
      <div id='frontpage'>
      <div className='log-in'>
      <fieldset>

      <form onSubmit={this.handleSubmit} >
      <input type="radio" name="rg" id="sign-in" />

      <label for="sign-in">Sign in</label>



      <input
      onChange={this.handleChange}
      type='text'
      name='username'
      value={this.state.username}
      placeholder="Username"
      className="sign-up sign-in reset"/>

      <input
      onChange={this.handleChange}
      type='password'
      name='password'
      value={this.state.password}
      placeholder="Password"
      className="sign-up sign-in"/>

      <button>Submit</button>
      </form>
      <div className='new-user'>
      <div className="btn" onClick={this.togglePop}>
      <button>New User?</button>
      </div>
      {this.state.seen ? <SignupPage toggle={this.togglePop} /> : null}
      </div>
      </fieldset>

      </div>
      </div>
    );
  }

}

export default withRouter(FrontPage);

import React, { Component } from 'react';
import '../../Stylesheets/signuppage.scss';

class SignupPage extends Component {
  state={
    name:'',
    username:'',
    password:''
  }

  handleClick = () => {
    this.props.toggle();
  };

  handleChange = event => {
    this.setState(
      {[event.target.name]: event.target.value}
    )
  }

  handleSubmit = event => {
    event.preventDefault()
    fetch('http://localhost:3000/users',{
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(this.state)
    })
    .then(alert("You have succesfully created a meow account"))
    // .then(this.props.history.push('/catfe'))
  }


  render() {
    return (
      <div id='signuppage'>
      <div className="modal">
        <div className="modal_content">
          <span className="close" onClick={this.handleClick}>
            &times;
          </span>
          <form onSubmit={this.handleSubmit}>
            <h3>Register!</h3>
            <label>
              Name:
            </label>
            <input
            type="text"
            name="name"
            onChange={this.handleChange}/>
            <br/>
            <label>
              Username:
            </label>
            <input
            type="text"
            name="username"
            onChange={this.handleChange}/>
            <br/>
            <label>
              Password:
            </label>
            <input
            type="password"
            name="password"
            onChange={this.handleChange}/>
            <br />
            <input type="submit" value="Register" />
          </form>
        </div>
      </div>
      </div>
    );
  }

}

export default SignupPage;

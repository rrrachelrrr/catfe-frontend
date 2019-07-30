import React, { Component } from 'react';


class FrontPage extends Component {


  state={
    username: '',
    password: ''
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


  render() {
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
      <input onChange={this.handleChange} type='text' name='username' value={this.state.username}/>
      <input onChange={this.handleChange} type='password' name='password' value={this.state.password}/>
      <input type='submit'/>
      </form>
      </div>
    );
  }

}

export default FrontPage;

import React, { Component } from 'react';

class User extends Component {

  render() {
    console.log("it me", this.props.current_user)
    return (
      <div>
      <h1>{this.props.current_user.name}</h1>
      <h1>{this.props.current_user.gold}G</h1>
      </div>
    );
  }

}

export default User;

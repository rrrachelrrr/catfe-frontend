import React, { Component } from 'react';
import { Link } from "react-router-dom";

class SignOut extends Component {


clearToken = () => localStorage.clear()

  render() {
    return (
      <div>
      <Link onClick={this.clearToken} to="/FrontPage">LogOut</Link>
      </div>
  );
  }

}

export default SignOut;

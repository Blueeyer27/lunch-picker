import React, { Component } from "react";
import { Input, Button } from "../../components";
import Logo from "../../assets/image/Logo.png";

class LoginPage extends Component {
  componentDidMount = () => {};

  render() {
    return (
      <div className="login">
        <div className="logo-container">
          <img src={Logo} className="logo" />
        </div>
        <div>
          <Input placeholder="User Id" fullWidth={true} />
          <Input placeholder="Password" fullWidth={true} />
        </div>
        <div className="login-btn-container">
          <Button onClick={() => {}} label="Login" />
        </div>
      </div>
    );
  }
}

export default LoginPage;

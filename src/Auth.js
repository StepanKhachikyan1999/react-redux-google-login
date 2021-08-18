import React, { Component } from "react";
import { GoogleLogin } from "react-google-login";
import { Route, withRouter } from "react-router-dom";
import Account from "./components/Account/Account";

 class Auth extends Component {
  state = {
    name: "",
    img: "",
  };

  responseGoogle = (response) => {
    console.log(response);
   localStorage.setItem("data", JSON.stringify( response))
    this.setState({
      name: response.profileObj.givenName,
      img: response.profileObj.imageUrl,
    });
  };

  render() {
    return (
      <div>
        <div>
          <GoogleLogin
            clientId="532981390107-l01b64b3kg0ed76jan64g6pk2v2c0tro.apps.googleusercontent.com"
            buttonText={
             <Route path={"/"} render={() => <button onClick={({history}) => this.props.history.push("/account")}>Login</button>} />  
            }
            onSuccess={this.responseGoogle}
            onFailure={this.responseGoogle}
            cookiePolicy={"single_host_origin"}
          />
          <h1 name={this.name}>{this.state.name}</h1>
          <img image={this.image} src={this.state.img} />

        </div>
      </div>
    );
  }
}


export default withRouter(Auth)
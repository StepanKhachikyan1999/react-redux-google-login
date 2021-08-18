import React, { Component } from "react";
import { connect } from "react-redux";
import Logout from "./Logout";
import "./Accounts.css";
class Account extends Component {
  render() {
    let item = localStorage.getItem("data");
    let a = JSON.parse(item);
    console.log(a);
    return (
      <div>
        <div className="data">
          <h1>{a.profileObj.givenName}</h1>
          <img src={a.profileObj.imageUrl} />
        </div>
        <div className="logout">
          <Logout />
        </div>
        
          {this.props.presentation.map((item) => {
            return (
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Opened</th>
                    <th scope="col">Size</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>{item.name}</td>
                    <td>{item.data}</td>
                    <td>{item.size}</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Wakira</td>
                    <td>Apr 7</td>
                    <td>450KB</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Wakira</td>
                    <td>Apr 7</td>
                    <td>450KB</td>
                  </tr>
                </tbody>
              </table>
            );
          })}
      </div>
    );
  }
}

export default connect((state) => ({
  presentation: state,
}))(Account);

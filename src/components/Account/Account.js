import React, { Component } from "react";
import { connect } from "react-redux";
import Logout from "./Logout";
import "./Accounts.css";
import BasicPagination from "./pagination/BasicPagination";
import Modal from "../Modal";


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

       <Modal />
        
       <div style={{display:"flex",justifyContent:"center"}} className="account-body">
                    <table>
                        <tr>
                            <th className="imgTh"></th>
                            <th>Name</th>
                            <th>Opened</th>
                            <th>Size</th>
                            <th className="butonsTh"></th>
                        </tr>
                        {this.props.presentation.map((item, index, arr) => {
                            return <tr>

                                <td>
                                    <img className="account-body-img" src={item.img} style={{width:"50px"}} />

                                </td>
                                <td><h2> {item.name}</h2></td>
                                <td>{item.opened}</td>
                                <td>{item.size}</td>
                                <td>
                                    <button className="account-body-btn">View</button>
                                    <button className="account-body-btn" onClick={() =>this.add(index)
                               }>delete</button>
                                </td>

                            </tr>
                        })}

                    </table>
                </div>
            <button onClick={this.props.openModal}>Add list</button>
          <BasicPagination />
      </div>
    );
  }
}

export default connect((state) => ({
  presentation: state.state1
}),
dispatch => ({
  openModal: () => {
    dispatch({type:"OPEN_MODAL"})
  }
})
)(Account);

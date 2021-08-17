import React, { Component } from 'react';
import { connect } from 'react-redux';

class Account extends Component {
    render() {
let item = localStorage.getItem("data")
let a  = JSON.parse(item)
console.log(
   a
);
        return (
            <div>
                <ul>
                {this.props.presentation.map(item => {
                    return(
                        <ul>
                    <li>{item.id}</li>
                    <li>{item.name}</li>
                    <li>{item.desc}</li>
                    </ul>
                           ) 
                })}
                </ul>
                <h1>{a.profileObj.givenName}</h1>
                <img src={a.profileObj.imageUrl} />
            </div> 
        )
    }
}

export default connect(state=>({
    presentation:state
}))(Account);
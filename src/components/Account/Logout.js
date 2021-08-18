import React, { Component } from 'react'
import { Route, withRouter } from 'react-router-dom';

 class Logout extends Component {
    render() {
        return (
            <div>
            {
             <Route path={"/"} render={() => <button className="btn btn-danger m-3" onClick={({history}) => this.props.history.replace("/","/account")}>Log out</button>} />  
            }
            </div>
        )
    }
}

export default withRouter(Logout);
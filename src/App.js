import React, { Component } from 'react'
import { Route } from 'react-router-dom';
import Account from './Account';
import Auth from './Auth';



export default class App extends Component {

     responseGoogle = (response) => {
        console.log(response);
      }
      
    render() {
        return (
            <div>
                <Route exact path={"/"}>
                <Auth  />
                </Route>
                <Route path={"/account"} render={() => <Account />} />
            </div>
        )
    }
}

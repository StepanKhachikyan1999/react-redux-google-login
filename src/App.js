import React, { Component } from 'react'
import { Route } from 'react-router-dom';
import Account from './components/Account/Account';
import Auth from './components/Account/Auth';
import Home from './components/Account/Home';
import './App.css'
import './style.css';



export default class App extends Component {

     responseGoogle = (response) => {
        console.log(response);
      }
      
    render() {
        return (
            <div className="App">
                <Route exact path={"/"}>
                <Home />
                <Auth  />
                <p>Preview existing presentation? Click here to enter code</p>
                </Route>
                <Route path={"/account"} render={() => <Account />} />
            </div>
        )
    }
}

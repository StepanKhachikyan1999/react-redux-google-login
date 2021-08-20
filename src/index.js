import "./style.css";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import {bootstrap} from  'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

ReactDOM.render(
  <Router>
  <Provider store={store}>
    <App />
  </Provider>
  </Router>,
  document.getElementById("root")
);

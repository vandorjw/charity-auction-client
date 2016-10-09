import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import Listing from './Listing';
import Login from './Login';
import './Base.css';


ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/listing" component={Listing}/>
    <Route path="/login" component={Login}/>
  </Router>
), document.getElementById('root'))



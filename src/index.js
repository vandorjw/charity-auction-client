import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import Listing from './listing.js';
import Login from './login.js';
import Item from './item.js';
import './base.css';


ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/listing" component={Listing}/>
    <Route path="/login" component={Login}/>
    <Route path="/item" component={Item}/>
  </Router>
), document.getElementById('root'))



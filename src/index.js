import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import Listing from './Listing';
import Login from './Login';
import Item from './Item';
import './Base.css';


ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/listing" component={Listing}/>
    <Route path="/login" component={Login}/>
    <Route path="/item" component={Item}/>
  </Router>
), document.getElementById('root'))



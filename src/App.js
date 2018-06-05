import React, { Component } from 'react';
import { withRouter } from 'react-router';
import AppBar from './components/AppBar';
import './App.css';

const App = (props) => {
  return (
    <div>
      <div id="bg"> </div>
      <AppBar />
      {props.children}
    </div>
  );
}

export default withRouter(App);

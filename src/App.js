import React from 'react';
import { withRouter } from 'react-router';
import AppBar from './containers/AppBar/AppBar';
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

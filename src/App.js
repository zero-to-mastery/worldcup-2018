import React, { Component } from 'react';
import AppBar from './components/AppBar';
import Teams from './components/Teams';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div id="bg"> </div>
        <AppBar />
        <Teams />
      </div>
    );
  }
}

export default App;

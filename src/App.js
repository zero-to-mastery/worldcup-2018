import React from "react";
import { withRouter } from "react-router";
import AppBar from "./containers/AppBar/AppBar";
import "./App.css";

const App = props => {
  return (
    <div className="App">
      <AppBar />
      {props.children}
    </div>
  );
};

export default withRouter(App);

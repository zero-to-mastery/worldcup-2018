import React from "react";
import { withRouter } from "react-router";
import AppBar from "./containers/AppBar/AppBar";
import styles from "./css_modules/app.css";

const App = props => {
  return (
    <div className={styles.wrapper}>
      <AppBar />
      {props.children}
    </div>
  );
};

export default withRouter(App);

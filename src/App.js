import React from "react";
import { withRouter } from "react-router";
import AppBar from "./containers/AppBar/AppBar";
import styles from "./css_modules/app.css";
import { changeStadium } from "./reducers";
import { Provider } from "react-redux";
import { createStore } from "redux";

const store = createStore(changeStadium);

const App = props => {
  return (
    <Provider store={store}>
      <div className={styles.wrapper}>
        <AppBar />
        {props.children}
      </div>
    </Provider>
  );
};

export default withRouter(App);

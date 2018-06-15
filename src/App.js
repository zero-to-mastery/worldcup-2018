import React from "react";
import { withRouter } from "react-router";
import AppBar from "./containers/AppBar/AppBar";
import styles from "./css_modules/app.css";
import { changeStadium, requestData } from "./reducers";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";

const logger = createLogger();
const rootReducer = combineReducers({ requestData, changeStadium });
const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware, logger)
);

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

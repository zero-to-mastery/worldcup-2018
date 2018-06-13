import React from "react";
import ReactDOM from "react-dom";
import "./css_modules/common.css";
import AppRoutes from "./routes";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<AppRoutes />, document.getElementById("root"));
registerServiceWorker();

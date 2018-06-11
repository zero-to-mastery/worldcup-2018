import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import HomePage from "./containers/HomePage/HomePage";
import TeamsPage from "./containers/TeamsPage/TeamsPage";
import StadiumsPage from "./containers/StadiumPage/StadiumPage";
import Fixtures from "./containers/Fixtures/Fixtures";
import Statistics from "./containers/Statistics/Statistic";
import TeamDetails from "./containers/TeamsDetails/TeamDetails";

export default () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <App>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/teams" component={TeamsPage} />
          <Route exact path="/fixtures" component={Fixtures} />
          <Route exact path="/stadiums" component={StadiumsPage} />
          <Route exact path="/statistics" component={Statistics} />
          <Route exact path="/teams/statistics" component={TeamDetails} />
        </Switch>
      </App>
    </BrowserRouter>
  );
};

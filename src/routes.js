import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import HomePage from './containers/HomePage/HomePage';
import TeamsPage from './containers/TeamsPage/TeamsPage';
import Fixtures from './containers/Fixtures/Fixtures';

export default () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <App>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/teams' component={TeamsPage}/>
          <Route exact path='/fixtures' component={Fixtures}/>
        </Switch>
      </App>
    </BrowserRouter>
  )
}
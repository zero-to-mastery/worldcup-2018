import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import Teams from './containers/Teams';
import Fixtures from './components/Fixtures';

export default () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <App>
        <Switch>
          <Route exact path='/' component={Teams}/>
          <Route exact path='/fixtures' component={Fixtures}/>
        </Switch>
      </App>
    </BrowserRouter>
  )
}
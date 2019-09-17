import React, { Fragment, Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import store from '../store';
import Header from './layout/Header';
import Board from './applications/Board';
import Login from './accounts/Login';
import Register from './accounts/Register';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Header />
          <Switch>
            {/* <PrivateRoute exact path="/" component={Board} /> */}
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/" component={Board} />
          </Switch>
        </Fragment>
      </Router>
    );
  }
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);

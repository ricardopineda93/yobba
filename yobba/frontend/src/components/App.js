import React, { Fragment, Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

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
import Alerts from './layout/Alerts';

const alertOptions = {
  timeout: 3000,
  position: 'top center'
};

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...alertOptions}>
          <Router>
            <Fragment>
              <Header />
              <Alerts />
              <div>
                <Switch>
                  {/* <PrivateRoute exact path="/" component={Board} /> */}
                  <Route exact path="/login" component={Login} />
                  <Route exact path="/register" component={Register} />
                  <Route exact path="/" component={Board} />
                </Switch>
              </div>
            </Fragment>
          </Router>
        </AlertProvider>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

import React, { Fragment, Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from '../store';
import Header from './layout/Header';
import Board from './applications/Board';

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Board />
      </Fragment>
    );
  }
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);

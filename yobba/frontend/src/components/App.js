import React, { Fragment, Component } from 'react';
import ReactDOM from 'react-dom';

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

ReactDOM.render(<App />, document.getElementById('app'));

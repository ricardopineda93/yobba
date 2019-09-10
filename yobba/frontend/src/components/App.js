import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Header from './layout/Header';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <h3>Content here, please!</h3>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

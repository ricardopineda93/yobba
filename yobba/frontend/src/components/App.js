import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>yobba.</h1>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

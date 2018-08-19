import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const helloWorld = 'Welcome to React';
    const name = {
      first: 'Jane',
      last: 'Smith'
    }
    return (
      <div className="App">
          <h2>{helloWorld}, {name.first} {name.last}</h2>
      </div>
    );
  }
}

export default App;

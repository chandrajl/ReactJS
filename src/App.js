import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  handleClick = () => {
    console.log('this is:', this);
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <button onClick={this.handleClick}>
           Click me
          </button>
        </header>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import  Canvas from './Canvas.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Canvas text = {'Your Face When ....'}/>
      </div>
    );
  }
}

export default App;

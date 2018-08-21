import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ImageOne from './ImageOne.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <ImageOne theImage = {"https://cdn3-www.cattime.com/assets/uploads/gallery/32-impossibly-cute-kittens/cute-kitten-1.jpg"}/>
      </div>
    );
  }
}

export default App;

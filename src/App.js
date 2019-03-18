import React, { Component } from 'react';
import BackgroundSkew from './components/BackgroundSkew';
import Nav from './components/Nav';
import Home from './components/Home';
import Footer from './components/Footer';
import './stylesheets/App.css';

class App extends Component {
  render() {
    return (
      <div>
        <BackgroundSkew/>
        <Nav/>
        <Home/>
        <Footer/>
      </div>
    );
  }
}

export default App;

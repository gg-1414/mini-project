import React, { Component } from 'react';
import { throttle } from 'throttle-debounce';
import BackgroundSkew from './components/BackgroundSkew';
import Nav from './components/Nav';
import Home from './components/Home';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  componentDidMount() {
    window.addEventListener('scroll', throttle( 300, this.handleScroll ))
  }

  // Here lies sticky-shrink nav scroll event listener
  handleScroll = () => {
    let scrollPosition = Math.round( window.scrollY );

    if( scrollPosition > 30 ) { // if scrolled past 300px, add nav--sticky-shrink class
      document.querySelector( 'nav' ).classList.add( 'nav--sticky-shrink' );
    } else { // if not, remove nav--sticky-shrink class from nav
        document.querySelector( 'nav' ).classList.remove( 'nav--sticky-shrink' );
    }
  }

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

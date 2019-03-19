import React, { Component } from 'react';
import { throttle } from 'throttle-debounce';
import BackgroundSkew from './components/BackgroundSkew';
import Nav from './components/Nav';
import Home from './components/Home';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  showSettings = (event) => {
    event.preventDefault();
  }

  componentDidMount() {
    window.addEventListener('scroll', throttle( 300, this.handleScroll ))

    // window.addEventListener('resize', throttle(200, this.resizeHandler))
    //
    // if( window.innerWidth < 706 ) {
    //   this.showHamburger();
    // }
  }

  // showHamburger = () => {
  //   document.querySelector( 'hamburger-menu' ).style.display = 'inline-block'
  //   document.querySelector( 'nav-bar' ).classList.remove( 'nav--sticky-shrink' );
  // }

  // Here lies sticky-shrink nav scroll event listener
  handleScroll = () => {
    let scrollPosition = Math.round( window.scrollY );

    if( scrollPosition > 30 ) { // if scrolled past 300px, add nav--sticky-shrink class
        document.querySelector( 'nav' ).classList.add( 'nav--sticky-shrink' );
    } else { // if not, remove nav--sticky-shrink class from nav
        document.querySelector( 'nav' ).classList.remove( 'nav--sticky-shrink' );
    }
  }

  // resizeHandler = (event) => {
  //   const width = event.target.outerWidth; // 1250px is a good size for hambagah
  //   if( width < 706 ) {
  //     document.querySelector( '.hamburger-menu' ).style.display = 'inline-block';
  //     document.querySelector( '.nav-bar' ).style.display = 'none';
  //   } else {
  //     document.querySelector( '.hamburger-menu' ).style.display = 'none';
  //     document.querySelector( '.nav-bar' ).style.display = 'inline-block';
  //   }
  // }

  render() {
    return (
      <div>
        <BackgroundSkew/>
        <Nav showSettings={this.showSettings}/>
        <Home/>
        <Footer/>
      </div>
    );
  }
}

export default App;

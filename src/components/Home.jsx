import React from 'react';
import '../stylesheets/Home.scss';

const Home = () => (
  <div className="main">
    <header>
      <h1>Get a website in 15 minutes <span>or less</span></h1>
      <div className="clearfix main__search">
        <input
          type="text"
          className="main__search-bar"
          placeholder="Write your domain name here.."
        />
        <button>Search</button>
      </div>
    </header>
    <div className="main__learn-more">
      <span>learn how we can enhance your business</span>
      <div>
        <i className="fa fa-arrow-down fa-2x"></i>
      </div>
    </div>
    <div className="main__description">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed vulputate odio ut enim blandit volutpat. Purus non enim praesent lorem ipsum dolor sit.</p>
      <button>create your account</button>
    </div>
    <section className="main__services">
      <h4>Our Services</h4>
      <hr/>
      <div className="main__services-cards">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </section>
  </div>
);

export default Home;

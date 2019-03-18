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

    </div>
    <section className="main__services">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </section>
  </div>
);

export default Home;

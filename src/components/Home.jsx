import React from 'react';
import '../stylesheets/Home.scss';

const Home = () => (
  <div className="main">
    <header>
      <h1>Get a website in 15 minutes <span>or less</span></h1>
      <div className="clearfix search">
        <input
          type="text"
          className="search-bar"
          placeholder="Write your domain name here.."
        />
        <button>Search</button>
      </div>
    </header>
    <div>
      <span>learn how we can enhance your business</span>
      <button></button>
    </div>
    <div>

    </div>
    <section className="services">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </section>
  </div>
);

export default Home;

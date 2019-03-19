import React from 'react';
import Reveal from 'react-reveal/Reveal';
import '../stylesheets/Home.scss';

const Home = () => (
  <div className="main">
    <header>
      <Reveal effect="fadeInUp">
        <h1>Get a website in 15 minutes <span>or less</span></h1>
        <div className="clearfix main__search">
          <input
            type="text"
            className="main__search-bar"
            placeholder="Write your domain name here.."
          />
          <button>Search</button>
        </div>
      </Reveal>
    </header>
    <div className="main__learn-more">
      <span>learn how we can enhance your business</span>
      <div className="main__arrow-animate">
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
      <div className="main__services-cards-container">
        <div className="main__services-card">
          <img src="/host-icon.png" alt="web host"/>
          <div className="main__services-card-text">
            <h5>web hosting</h5>
            <i className="fa fa-arrow-right fa-1x"></i>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>
        <div className="main__services-card">
          <img src="/host-icon.png" alt="web host"/>
          <div className="main__services-card-text">
            <h5>resellers</h5>
            <i className="fa fa-arrow-right fa-1x"></i>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>
        <div className="main__services-card">
          <img src="/host-icon.png" alt="web host"/>
          <div className="main__services-card-text">
            <h5>vps hosting</h5>
            <i className="fa fa-arrow-right fa-1x"></i>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>
        <div className="main__services-card">
          <img src="/host-icon.png" alt="web host"/>
          <div className="main__services-card-text">
            <h5>cloud hosting</h5>
            <i className="fa fa-arrow-right fa-1x"></i>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>
      </div>
    </section>
    <section className="main__ready-create-contact">
      <div>
        <p>Are you ready?</p>
        <p>Create an account, or contact us.</p>
      </div>
      <div>
        <button>create your account</button>
        <button>contact us</button>
      </div>
    </section>
  </div>
);

export default Home;

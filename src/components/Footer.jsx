import React from 'react';
import '../stylesheets/Footer.scss';

const Footer = () => (
  <footer>
    <section className="footer__contact">
      <div>
        <i className="fa fa-phone"></i>
        <p>+1 800 WEBSITE</p>
      </div>
      <div>
        <i className="fa fa-envelope"></i>
        <p>hello@mywebnow.com</p>
      </div>
      <div>
        <i className="fa fa-map-marker"></i>
        <div className="footer__contact-location">
          <p>1 Main St</p>
          <p>Floor 6,</p>
          <p>New York, NY 10005</p>
        </div>
      </div>
    </section>
    <section className="footer__company">
      <p>Company</p>
      <p>About Us</p>
      <p>News</p>
      <p>FAQ</p>
      <p>Contact Us</p>
    </section>
    <section className="footer__services">
      <p>Services</p>
      <p>Web Hosting</p>
      <p>Cloud Hosting</p>
      <p>VPS Servers</p>
      <p>Domain Names</p>
    </section>
    <section className="footer__other">
      <p>Other</p>
      <p>Transfer&nbsp;domains</p>
      <p>Customer Portal</p>
      <p>Support Portal</p>
      <p>Video Tutorials</p>
    </section>
    <section className="social">
        <p>
          <i className="fa fa-facebook fa-2x"></i>
        </p>
        <p>
            <i className="fa fa-youtube fa-2x"></i>
        </p>
        <p>
            <i className="fa fa-twitter fa-2x"></i>
        </p>
    </section>
  </footer>
);

export default Footer;

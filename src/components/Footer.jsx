import React from 'react';
import '../stylesheets/Footer.scss';

const Footer = () => (
  <footer>
    <section className="footer__contact">
        <p><i className="fa fa-phone"></i>+1 800 WEBSITE</p>
        <p><i className="fa fa-envelope"></i>hello@mywebnow.com</p>
        <div className="footer__contact-location">
          <p><i className="fa fa-map-marker"></i>1 Main St</p>
          <p><i className="fa fa-map-marker"></i>Floor 6,</p>
          <p><i className="fa fa-map-marker"></i>New York, NY 10005</p>
        </div>
    </section>
    <section className="footer__company">
      <p>Company</p>
      <a>About Us</a>
      <a>News</a>
      <a>FAQ</a>
      <a>Contact Us</a>
    </section>
    <section className="footer__services">
      <p>Services</p>
      <a>Web Hosting</a>
      <a>Cloud Hosting</a>
      <a>VPS Servers</a>
      <a>Domain Names</a>
    </section>
    <section className="footer__other">
      <p>Other</p>
      <a>Transfer Domains</a>
      <a>Customer Portal</a>
      <a>Support Portal</a>
      <a>Video Tutorials</a>
    </section>
    <section className="footer__social">
        <a><i className="fa fa-facebook fa-2x"></i></a>
        <a><i className="fa fa-youtube fa-2x"></i></a>
        <a><i className="fa fa-twitter fa-2x"></i></a>
    </section>
  </footer>
);

export default Footer;

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
      <a href="#">About Us</a>
      <a href="#">News</a>
      <a href="#">FAQ</a>
      <a href="#">Contact Us</a>
    </section>
    <section className="footer__services">
      <p>Services</p>
      <a href="#">Web Hosting</a>
      <a href="#">Cloud Hosting</a>
      <a href="#">VPS Servers</a>
      <a href="#">Domain Names</a>
    </section>
    <section className="footer__other">
      <p>Other</p>
      <a href="#">Transfer Domains</a>
      <a href="#">Customer Portal</a>
      <a href="#">Support Portal</a>
      <a href="#">Video Tutorials</a>
    </section>
    <section className="footer__social">
        <a href="#"><i className="fa fa-facebook fa-2x"></i></a>
        <a href="#"><i className="fa fa-youtube fa-2x"></i></a>
        <a href="#"><i className="fa fa-twitter fa-2x"></i></a>
    </section>
  </footer>
);

export default Footer;

import React, { Fragment } from 'react';
import '../stylesheets/BackgroundSkew.scss';

const BackgroundSkew = () => (
  <div className="bgSkew">
    <div className="bgSkew__layer1--dark-purple"></div>
    <div className="bgSkew__layer2--purple"></div>
    <div className="bgSkew__layer3--purple-blue"></div>
    {/*<div className="bgSkew__layer4--grey"></div>*/}
  </div>
);

export default BackgroundSkew;

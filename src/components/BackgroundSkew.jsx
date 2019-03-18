import React, { Fragment } from 'react';
import '../stylesheets/BackgroundSkew.scss';

const BackgroundSkew = () => (
  <Fragment>
    <div className="bgSkew__layer1--dark-purple"></div>
    <div className="bgSkew__layer2--purple"></div>
    <div className="bgSkew__layer3--purple-blue"></div>
    {/*<div className="bgSkew__layer4--grey"></div>*/}
  </Fragment>
);

export default BackgroundSkew;

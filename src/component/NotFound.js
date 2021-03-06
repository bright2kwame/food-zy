import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/App.css'
import '../css/Notfound.css'
import {
  Link
} from "react-router-dom";

function NotFoundComponent() {
  return (
    <div>
      <div className="container">
      <div className="error-wrapper">
          <div className="man-icon"></div>
          <h3 className="title">404</h3>
          <p className="info">Oh! Page not found</p>
          <a className="home-btn info"><Link to="/">Go Home</Link></a>
      </div>
    </div>
    </div>
  );
}

export default NotFoundComponent;
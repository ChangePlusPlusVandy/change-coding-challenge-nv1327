import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component{
/*
<li className="navbar-item">
<Link to="/" className="nav-link">Selections</Link>
</li>
<li className="navbar-item">
<Link to="/score" className="nav-link">Score</Link>
</li>*/

  render() {
    return(
      <nav className="navbar navbar-expand-lg">
        <Link to="/" className="navbar-brand">MuskYe</Link>
<img src="/assets/muskye.png"></img>
        <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">

        </ul>
        </div>
        </nav>
    );
  }
}

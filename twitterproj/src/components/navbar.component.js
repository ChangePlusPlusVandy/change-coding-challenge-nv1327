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

//https://stackoverflow.com/questions/34582405/react-wont-load-local-images
//finally


  render() {
    return(
      <nav className="navbar">
  <a className="navbar-brand" href="#">
  <img style={{marginBottom: -65, marginTop: -20, marginLeft: 10}} src={require('./muskye.png')} height="150px"/>
  </a>
</nav>

    );
  }
}

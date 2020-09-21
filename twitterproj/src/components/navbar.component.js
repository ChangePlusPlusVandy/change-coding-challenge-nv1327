import React, { Component } from 'react';

export default class Navbar extends Component{

  render() {
    return(
      <nav className="navbar">
        <a className="navbar-brand" href="/">
        <img alt="Responsive" style={{marginBottom: -65, marginTop: -20, marginLeft: 10}} src={require('./muskye.png')} height="150px"/>
        </a>
      </nav>

    );
  }
}

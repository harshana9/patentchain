/*import React, { Component } from 'react';

class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark fixed-top flex-md-nowrap p-0 shadow" style={{ 'background-color': '#04136c', height:'50px'}}>
        <a
          className="navbar-brand col-sm-3 col-md-2 mr-0"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          PatentChain
        </a>
        <ul className="navbar-nav px-3">
          <li className="nav-item text-nowrap d-none d-sm-none d-sm-block">
            <small className="text-white"><span id="account">{this.props.account}</span></small>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;*/


//Use ml-auto css class to right align navbar items

import React from 'react';

const Navbar = (props) => {
  return (

  <nav className="navbar navbar-dark fixed-top flex-md-nowrap p-0 shadow" style={{ 'backgroundColor': '#04136c', height:'50px'}}>
    <a
      className="navbar-brand col-sm-3 col-md-2 mr-0"
      href="#"
      target="_blank"
      rel="noopener noreferrer"
    >
      PatentChain
    </a>
    <ul className="navbar-nav ml-auto">
      <li className="nav-item text-nowrap d-none d-sm-none d-sm-block">
        <small className="text-white" style={{ 'paddingRight': '10px' }}><b>Account:</b> <span id="account">{props.account}</span></small>
      </li>
    </ul>
  </nav>
  );
};

export default Navbar;

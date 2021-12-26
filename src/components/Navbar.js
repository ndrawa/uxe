import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {

  render() {
    return (
      <nav className='NavbarItems'>
        <nav className="navbar navbar-dark fixed-top flex-md-nowrap p-0 shadow">
          <ul className="navbar-nav px-3">
            <li className="nav-item text-nowrap d-none d-sm-none d-sm-block">
              <small>asdasd
                <span id="account">{this.props.account}</span>
              </small>
            </li>
          </ul>
        </nav>
      </nav>
    );
  }
}

export default Navbar;

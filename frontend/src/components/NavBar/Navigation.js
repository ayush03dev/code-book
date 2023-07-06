import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

import './Navigation.css';

function Navigation() {


  return (
    <div className="navigation">
      <Navbar collapseOnSelect expand="lg" id="responsive-navbar-nav" variant="dark" >
        <Navbar.Brand href="#home" className="nav-span">Code Book</Navbar.Brand>

      </Navbar>
    </div>
  )
}

export default Navigation;

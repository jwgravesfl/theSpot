import img from '../assets/theSpotLogoPNG.png'

import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    return (
      <div id="theSpotNavBar" >
        <Navbar color="faded" light className="navbar-expand-lg align-middle" >
        <NavbarToggler onClick={this.toggleNavbar} className="mr-2" /> 
        <NavbarBrand href="/" className="mr-auto theSpotLogo"><img className="" src={img} alt="theSpot Logo" /></NavbarBrand>
         
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar className="nav justify-content-center" >
              <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
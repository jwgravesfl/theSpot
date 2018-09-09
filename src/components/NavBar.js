import img from '../assets/theSpotLogoPNG.png'

import React from 'react';
import { Button, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap';
import {Link} from 'react-router-dom'
import {logout} from '../firebase/auth'

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
        <Navbar color="faded" light className="navbar-expand-lg align-middle fixed-top" >
        <NavbarToggler onClick={this.toggleNavbar} className="mr-2" /> 
        <NavbarBrand href="/" className="mr-auto theSpotLogo"><img className="" src={img} alt="theSpot Logo" /></NavbarBrand>
         
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar className="nav justify-content-center" >
              <NavItem>
                <Link to="/addSpot/">
                  <Button outline color="info" className="navBarButtons" >
                    Add Spot  
                  </Button>
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/filteredspots/">
                  <Button outline color="info" className="navBarButtons" >
                    Spots  
                  </Button>
                </Link>
                
              </NavItem>
              <NavItem className="loginRegisterLogoutNavItem" >
              {this.props.authed
                ? <Button outline color="secondary" className="navBarButtons" 
                    onClick={() => {
                      logout()
                    }}
                    >Logout</Button>
                : <span>
                    <Link to="/login" color="secondary" outline className="navbar-brand">
                      <Button outline className="navBarButtons" >Login</Button>
                    </Link>
                    <Link to="/register" color="secondary" outline className="navbar-brand">
                      <Button outline className="navBarButtons" >Register</Button>
                    </Link>
                  </span>}
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
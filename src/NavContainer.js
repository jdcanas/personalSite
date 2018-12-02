import React, { Component } from "react";
import { Navbar, MenuItem, NavItem, Nav, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";

class NavContainer extends Component {
  render() {
    return (
        <Navbar className="sticky" inverse collapseOnSelect>
          <Navbar.Header>
            <LinkContainer to="/">
              <Navbar.Brand>Home</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
            <LinkContainer to="/theme">
                <NavItem>Introduction</NavItem>
              </LinkContainer>
              <LinkContainer to="/bio">
                <NavItem>Bio</NavItem>
              </LinkContainer>
              <LinkContainer to="/theme">
                <NavItem>About this site</NavItem>
              </LinkContainer>
              <LinkContainer to="/theme">
                <NavItem>Pitch</NavItem>
              </LinkContainer>
              <LinkContainer to="/theme">
                <NavItem>Resume</NavItem>
              </LinkContainer>
              <LinkContainer to="/theme">
                <NavItem>Projects</NavItem>
                {/* timeline is nice here */}
              </LinkContainer>
              <LinkContainer to="/theme">
                <NavItem>Skills</NavItem>
                {/* visual */}
              </LinkContainer>
              <LinkContainer to="/theme">
                <NavItem>What I'm reading</NavItem>
              </LinkContainer>
              <LinkContainer to="/theme">
                <NavItem></NavItem>
              </LinkContainer>
              <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                <MenuItem eventKey={3.1}>Action</MenuItem>
                <MenuItem eventKey={3.2}>Another action</MenuItem>
                <MenuItem eventKey={3.3}>Something else here</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={3.3}>Separated link</MenuItem>
              </NavDropdown>
            </Nav>
            <Nav pullRight>
              <NavItem eventKey={2} href="#">
                Contact Info
                       </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
    );
  }
}

export default NavContainer;
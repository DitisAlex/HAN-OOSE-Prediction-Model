import React from 'react'
import { Link } from 'react-router-dom'
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap'

export default function NavbarComponent(props) {
  return (
    <Navbar color="dark" dark expand="md">
      <NavbarBrand>Prediction Model</NavbarBrand>
      <Nav className="container-fluid" navbar>
        <NavItem>
          <Link to="/" className="text-light">
            Home
          </Link>
        </NavItem>

        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle nav caret className="text-light" id="dropdownToggle">
            Models
          </DropdownToggle>

          <DropdownMenu right>
          <Link to="/consumption" className="text-light" id="consumptionPage">
              <DropdownItem>EV power</DropdownItem>
            </Link>
            <Link to="/production" className="text-light" id="productionPage">
              <DropdownItem>Solar power</DropdownItem>
            </Link>
          </DropdownMenu>
        </UncontrolledDropdown>
        <NavItem className="ml-auto">
          <Link to="/login" className="text-light">
            Login
          </Link>
        </NavItem>
      </Nav>
    </Navbar>
  )
}

import React, { useState } from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap'

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)


  const toggle = () => setIsOpen(!isOpen);

  
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Reading Tracker</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/books">All Books</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/reading">Currently Reading</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/finished">Finished Books</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/not-started">Not Started</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/" onClick={() => localStorage.removeItem("activeUser")}>
                <strong>Logout</strong>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}

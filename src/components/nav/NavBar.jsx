import React, { useState } from 'react';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

export const NavBar = (args) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar {...args}>
        <NavbarBrand href="/">Reading Tracking</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink>Currently Reading</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                To Be Read
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                Finished
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/"
                onClick={() => {
                    localStorage.removeItem("activeUser")
                }}
              >
                <strong>Logout</strong>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

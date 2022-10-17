import React from 'react';
import { FaBars } from 'react-icons/fa';
import { Nav, NavBarContainer, NavLogo, CollapsedIcons, NavMenu, NavItem, NavLinks } from './navBarElements';

const NavBar = ({ toggle }) => {
    return (
        <>
          <Nav>
            <NavBarContainer>
              <NavLogo to="/">Nicholas Kempkes</NavLogo>
              <CollapsedIcons onClick={toggle}>
                <FaBars />
              </CollapsedIcons>
              <NavMenu>
                <NavItem>
                  <NavLinks to="about">About Me</NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks to="experience">Experience</NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks to="education">Education</NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks to="contact">Contact Me</NavLinks>
                </NavItem>
              </NavMenu>
            </NavBarContainer>
          </Nav>
        </>
    )
}

export default NavBar;
import React from 'react';
import { FaBars } from 'react-icons/fa';
import { Nav, NavBarContainer, NavLogo, CollapsedIcons, NavMenu, NavItem, NavLinks } from './navBarElements';

const NavBar = ({ toggle }) => {

  const toggleHome = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <>
      <Nav>
        <NavBarContainer>
          <NavLogo
            to='/'
            smooth={false}
            spy={true}
            duration={500}
            exact='true'
            onClick={toggleHome}>Nicholas Kempkes</NavLogo>
          <CollapsedIcons onClick={toggle}>
            <FaBars />
          </CollapsedIcons>
          <NavMenu>
            <NavItem>
              <NavLinks
                to="education"
                smooth={false}
                spy={true}
                duration={500}
                exact='true'
                offset={-80}
              >Education</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="experience"
                smooth={false}
                spy={true}
                duration={500}
                exact='true'
                offset={-80}
              >Experience</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="employmentHistory"
                smooth={false}
                spy={true}
                duration={500}
                exact='true'
                offset={-80}
              >Employment History</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="contact"
                smooth={false}
                spy={true}
                duration={500}
                exact='true'
                offset={-80}
              >Contact Me</NavLinks>
            </NavItem>
          </NavMenu>
        </NavBarContainer>
      </Nav>
    </>
  )
}

export default NavBar;
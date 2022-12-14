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

  /*
  < navigator.maxTouchPoints > is being used to check for mobile device as just pixel width is not enough when the device is in landscape mode. The reason I did not do this for the entire app is that from what I have gathered touch devices like some laptops and all-in-ones will report back as touch devices which will give a mobile view. Figure for all touch devices a hiding nav bar is not a bad idea.
  */

  let prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos < currentScrollPos && (screen.width <= 768 || navigator.maxTouchPoints)) {
      document.getElementById("navbar").style.top = "-80px";
    } else {
      document.getElementById("navbar").style.top = "0";
    }
    prevScrollpos = currentScrollPos;
  };

  return (
    <>
      <Nav id='navbar'>
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
                aria-label="Education Link"
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
                aria-label="Experience Link"
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
                aria-label="Employment Link"
                to="employmentHistory"
                smooth={false}
                spy={true}
                duration={500}
                exact='true'
                offset={-80}
              >Employment History</NavLinks>
            </NavItem>
          </NavMenu>
        </NavBarContainer>
      </Nav>
    </>
  )
}

export default NavBar;
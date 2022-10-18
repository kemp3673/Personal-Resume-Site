import React from 'react';
import { SideBarContainer, Icon, CloseIcon, SideBarWrapper, SideBarMenu, SideBarLink } from './SideBarElements';

const SideBar = ({ isOpen, toggle }) => {
    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    const homeHandler = () => {
        toggle();
        goToTop();
    };

    return (
        <SideBarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SideBarWrapper>
                <SideBarMenu>
                    <SideBarLink
                        to="/"
                        onClick={toggle}
                        smooth={false}
                        spy={true}
                        duration={500}
                        exact='true'
                        offset={-80}
                        onClick={homeHandler}
                    >
                        About Me
                    </SideBarLink>
                    <SideBarLink
                        to="education"
                        onClick={toggle}
                        smooth={false}
                        spy={true}
                        duration={500}
                        exact='true'
                        offset={-80}
                    >
                        Education
                    </SideBarLink>
                    <SideBarLink
                        to="experience"
                        onClick={toggle}
                        smooth={false}
                        spy={true}
                        duration={500}
                        exact='true'
                        offset={-80}
                    >
                        Experience
                    </SideBarLink>
                    <SideBarLink
                        to="employmentHistory"
                        onClick={toggle}
                        smooth={false}
                        spy={true}
                        duration={500}
                        exact='true'
                        offset={-80}
                    >
                        Employment History
                    </SideBarLink>
                    <SideBarLink
                        to="contact"
                        onClick={toggle}
                        smooth={false}
                        spy={true}
                        duration={500}
                        exact='true'
                        offset={-80}
                    >
                        Contact Me
                    </SideBarLink>
                </SideBarMenu>
            </SideBarWrapper>
        </SideBarContainer>
    )
}

export default SideBar;
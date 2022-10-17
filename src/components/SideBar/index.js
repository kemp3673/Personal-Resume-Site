import React from 'react';
import { SideBarContainer, Icon, CloseIcon, SideBarWrapper, SideBarMenu, SideBarLink } from './SideBarElements';

const SideBar = ({isOpen, toggle}) => {
    return (
        <SideBarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SideBarWrapper>
                <SideBarMenu>
                    <SideBarLink to="about" onClick={toggle}>
                      About Me
                    </SideBarLink>
                    <SideBarMenu>
                    <SideBarLink to="experience" onClick={toggle}>
                      Experience
                    </SideBarLink>
                </SideBarMenu>
                <SideBarMenu>
                    <SideBarLink to="education" onClick={toggle}>
                      Education
                    </SideBarLink>
                </SideBarMenu>
                <SideBarMenu>
                    <SideBarLink to="contact" onClick={toggle}>
                      Contact Me
                    </SideBarLink>
                </SideBarMenu>
                </SideBarMenu>
            </SideBarWrapper>
        </SideBarContainer>
    )
}

export default SideBar;
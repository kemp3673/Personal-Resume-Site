import React from 'react';
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink } from './footerElements';

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterWrap>
          <FooterLinksContainer>
            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle>About Me</FooterLinkTitle>
                <FooterLink
                  to="education"
                  smooth={false}
                  spy={true}
                  duration={500}
                  exact='true'
                  offset={-80}
                >Education</FooterLink>
                <FooterLink
                  to="experience"
                  smooth={false}
                  spy={true}
                  duration={500}
                  exact='true'
                  offset={-80}
                >Experience</FooterLink>
                <FooterLink
                  to="employmentHistory"
                  smooth={false}
                  spy={true}
                  duration={500}
                  exact='true'
                  offset={-80}
                >Employment History</FooterLink>
                <FooterLink href=''>Additional Websites Created</FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>
          </FooterLinksContainer>
        </FooterWrap>
      </FooterContainer>
    </>
  )
}

export default Footer;
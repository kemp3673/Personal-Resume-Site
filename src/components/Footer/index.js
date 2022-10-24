import React from 'react';
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, FooterExternalLink } from './footerElements';

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
                <FooterExternalLink href="http://www.wagsandwalkies.dog/" target="_blank">Additional Websites Created</FooterExternalLink>
              </FooterLinkItems>
            </FooterLinksWrapper>
          </FooterLinksContainer>
        </FooterWrap>
      </FooterContainer>
    </>
  )
}

export default Footer;
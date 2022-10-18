import React from 'react';
import ProfileImage from '../../images/profile_pic.jpeg';
import { FaGithub } from 'react-icons/fa';
import { GrLinkedin } from 'react-icons/gr';
import { ContactContainer, ContactH1, ContactWrapper, ContactContent, ContactH2, ContactP, ContactLogo, ContactLink, ContactProfileImage } from './contactElements';


const Contact = () => {
    return (
        <>
            <ContactContainer id="contact">
                <ContactWrapper>
                    <ContactContent>
                        <ContactH1>Contact Me</ContactH1>
                        <ContactProfileImage src={ProfileImage} />
                        <ContactH2>Phone</ContactH2>
                        <ContactP>(218) 770-3673</ContactP>
                        <ContactH2>Email</ContactH2>
                        <ContactP>nicholas.kempkes@gmail.com</ContactP>
                        <ContactH2>Websites</ContactH2>
                        <ContactLogo>
                            <ContactLink href="https://github.com/kemp3673"><FaGithub /></ContactLink>
                            &nbsp;
                            <ContactLink href="https://www.linkedin.com/in/nicholas-kempkes/"><GrLinkedin /></ContactLink>
                        </ContactLogo>
                    </ContactContent>
                </ContactWrapper>
            </ContactContainer>
        </>
    )
}

export default Contact;
import React, { useState, useEffect } from "react";
import { ContactContainer, ContactOuter } from "./contactElements";
import MessageMe from './messageButton';




const Contact = ({showModal, toggleModal}) => {

    return (
        <>
            <ContactOuter id="contact">
                <ContactContainer>
                    <MessageMe toggleModal={ toggleModal }/>
                </ContactContainer>
            </ContactOuter>
        </>
    )
}

export default Contact;
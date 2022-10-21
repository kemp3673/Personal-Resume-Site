import React, { useState, useEffect } from "react";
import { ContactContainer, ContactOuter } from "./contactElements";
import MessageMe from './messageButton';
import MessageModal from './messageModal';




const Contact = () => {
    const [showModal, setShowModal] = React.useState(false);

    const handleClick = () => {
        setShowModal(current => !current);
        console.log(showModal);
    };

    return (
        <>
            <ContactOuter>
                <ContactContainer>
                    <MessageMe handleClick={ handleClick }/>
                </ContactContainer>
            </ContactOuter>
            {
                showModal === true ?
                    <MessageModal closeModal={ handleClick }/>
                    : null
            }
        </>
    )
}

export default Contact;
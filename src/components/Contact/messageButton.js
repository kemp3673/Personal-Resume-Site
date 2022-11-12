import React from 'react';
import { ContactButton, ContactLink } from './messageButtonElements';
import { HiOutlineMailOpen } from 'react-icons/hi';
const messageButton = ({ toggleModal }) => {
  return (
    <>
      <ContactButton aria-label="Contact Me Button" className="contactButton" alt="Contact Me Button">
        <ContactLink onClick={() => toggleModal()}><HiOutlineMailOpen size={50}/></ContactLink>
      </ContactButton>
    </>
  )
}

export default messageButton;
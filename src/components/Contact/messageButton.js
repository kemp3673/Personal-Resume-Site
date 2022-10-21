import React from 'react';
import { ContactButton, ContactLink } from './messageButtonElements';
import { HiOutlineMailOpen } from 'react-icons/hi';
const messageButton = ({ handleClick }) => {
  return (
    <>
      <ContactButton>
        <ContactLink onClick={() => handleClick()}><HiOutlineMailOpen size={70}/></ContactLink>
      </ContactButton>
    </>
  )
}

export default messageButton;
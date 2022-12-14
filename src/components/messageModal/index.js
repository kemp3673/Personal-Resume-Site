import React, { useState, useEffect } from 'react';
import axios from 'axios';
import $ from 'jquery';
import {CgClose} from 'react-icons/cg';
import { formValidation } from './formValidation';
import { MessageModalContainer, MessageModalWrapper, MessageModalContent, MessageModalHeader, MessageModalTitle, MessageModalClose, MessageModalBody, MessageModalForm, MessageModalLabel, MessageModalInput, MessageModalTextArea, MessageModalButton, Error } from './messageModalElements';

const MessageModal = ({ toggleModal, showModal }) => {

  const formDefault = {message: "", name: "", email: ""};
  const [formValues, setFormValues] = useState(formDefault);
  const [canSubmit, setCanSubmit] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormValues({...formValues, [name]: value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let validated = formValidation(formValues);
    if (Object.keys(validated).length === 0) {
      setFormErrors({});
      setCanSubmit(true);
    } else {
      setFormErrors(validated);
    }
  }

  useEffect(() => {
    if (Object.keys(formErrors).length == 0 && canSubmit) {
      let body = {
        "message": `${formValues.message}`,
        "name": `${formValues.name}`,
        "email": `${formValues.email}`,
      }
      sendEMail(body)
      toggleModal();
    }
  }, [canSubmit])

  const sendEMail = (body) => {
    axios.post(`/contact`, body)
      .then(() => {
        console.log('Email sent successfully');
      })
      .catch((error) => {
        console.log("error", error.message)
      })
  }

  const handleModalClose = (e) => {
    if (!$(e.target).closest("#modal, .contactButton").length) {
      toggleModal();
    };
  }

  return (
    <>
      <MessageModalContainer onClick={(e) => handleModalClose(e)} toggleModal={ toggleModal } showModal={ showModal }>
        <MessageModalWrapper>
          <MessageModalContent id="modal">
            <MessageModalHeader>
            <MessageModalTitle>Contact Me</MessageModalTitle>
            <MessageModalClose onClick={() => toggleModal()}><CgClose/></MessageModalClose>
            </MessageModalHeader>
            <MessageModalBody>
              <MessageModalForm>
                <MessageModalLabel>Name</MessageModalLabel>
                <MessageModalInput
                  type="text"
                  id="name"
                  name="name"
                  value={formValues.name}
                  placeholder="John Smith"
                  onChange={(e) => {handleChange(e)}}
                />
                {formErrors.name ? <Error>{ formErrors.name }</Error> : null}
                <MessageModalLabel>Email</MessageModalLabel>
                <MessageModalInput
                  type="text"
                  id="email"
                  name="email"
                  value={formValues.email}
                  placeholder="johnsmith@gmail.com"
                  onChange={(e) => {handleChange(e)}}
                />
                {formErrors.email ? <Error>{ formErrors.email }</Error> : null}
                <MessageModalLabel>Message</MessageModalLabel>
                <MessageModalTextArea
                  id="message"
                  name="message"
                  oninput="auto_grow(this)"
                  value={formValues.message}
                  placeholder="Hello! I would like to hire you for a project."
                  onChange={(e) => {handleChange(e)}}
                />
                {formErrors.message ? <Error>{ formErrors.message }</Error> : null}
                <MessageModalButton
                  type="button"
                  onClick={(e) => {handleSubmit(e)}}
                >Send</MessageModalButton>
              </MessageModalForm>
            </MessageModalBody>
          </MessageModalContent>
        </MessageModalWrapper>
      </MessageModalContainer>
    </>
  )
}

export default MessageModal;
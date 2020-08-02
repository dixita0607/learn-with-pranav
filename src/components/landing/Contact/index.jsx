import React from 'react';
import { Container } from 'components/common';
import contact from 'assets/illustrations/contact.svg';
import { Wrapper, Details, Thumbnail, ContactWrapper } from './styles';
import ContactForm from './ContactForm';

export const Contact = () => (
  <Wrapper as={Container} id="contact">
    <h1>Contact</h1>
    <ContactWrapper>
      <Details>
        <ContactForm />
      </Details>
      <Thumbnail>
        <img src={contact} alt="I’m John and I’m a Backend & Devops engineer!" />
      </Thumbnail>
    </ContactWrapper>
  </Wrapper>
);

import React from 'react';
import { Container } from 'components/common';
import { Wrapper, Flex, Links, Details, ContactDetails } from './styles';
import social from './social.json';

export const Footer = () => (
  <Wrapper>
    <Flex as={Container}>
      <Details>
        <h2>Pranav Popat</h2>
        <ContactDetails>
          Phone: <a href="tel:+918319787329">+91 83197 87329</a>
        </ContactDetails>
        <ContactDetails>
          Email: <a href="mailto:capranavpopat@gmail.com">capranavpopat@gmail.com</a>
        </ContactDetails>
      </Details>
      <Links>
        {social.map(({ id, name, link, icon }) => (
          <a key={id} href={link} target="_blank" rel="noopener noreferrer" aria-label={`follow me on ${name}`}>
            <img width="24" src={icon} alt={name} />
          </a>
        ))}
      </Links>
    </Flex>
  </Wrapper>
);

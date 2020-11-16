import React from 'react';
import { Container } from 'components/common';
import { Wrapper, Flex, Links, Details, ContactDetails } from './styles';

export const Footer = ({ socialLinks, phone, email }) => (
  <Wrapper>
    <Flex as={Container}>
      <Details>
        <h2>Pranav Popat</h2>
        <ContactDetails>
          Phone: <a href={`tel:${phone}`}>{phone}</a>
        </ContactDetails>
        <ContactDetails>
          Email: <a href={`mailto:${email}`}>{email}</a>
        </ContactDetails>
      </Details>
      <Links>
        {socialLinks.map(({ platform, link }, index) => (
          <a key={index.toString()} href={link} target="_blank" rel="noopener noreferrer"
             aria-label={`follow me on ${platform}`}>
            <img width="24" src={`/icons/${platform.toLowerCase()}.svg`} alt={platform} />
          </a>
        ))}
      </Links>
    </Flex>
  </Wrapper>
);

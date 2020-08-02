import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Wrapper } from './styles';

const NavbarLinks = ({ desktop }) => {

  return (
    <Wrapper desktop={desktop}>
      <AnchorLink href="#about">About Pranav</AnchorLink>
      <AnchorLink href="#tutorials">Tutorials</AnchorLink>
      <AnchorLink href="#testimonials">Testimonials</AnchorLink>
      <AnchorLink href="#contact">Contact</AnchorLink>
    </Wrapper>
  )

};

export default NavbarLinks;

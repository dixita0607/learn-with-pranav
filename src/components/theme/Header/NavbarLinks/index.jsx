import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Wrapper } from './styles';

const NavbarLinks = ({ desktop }) => {

  return (
    <Wrapper desktop={desktop}>
      <AnchorLink href="#about">About Pranav</AnchorLink>
      <a href="https://learnwithpranav.stores.instamojo.com/" target="_blank">Buy Courses</a>
      <AnchorLink href="#tutorials">Tutorials</AnchorLink>
      <AnchorLink href="#testimonials">Testimonials</AnchorLink>
      <AnchorLink href="#contact">Contact</AnchorLink>
    </Wrapper>
  )

};

export default NavbarLinks;

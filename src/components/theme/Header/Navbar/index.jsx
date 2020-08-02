import React from 'react';
import { Link } from 'gatsby';
import { Container } from 'components/common';
import logo from 'assets/logo.svg';
import NavbarLinks from '../NavbarLinks';
import { Wrapper, Brand, Logo } from './styles';

const Navbar = () => {

  return (
    <Wrapper as={Container}>
      <Brand as={Link} to="/">
        <Logo src={logo} alt="Learn with Pranav" />
        {/*Learn with Pranav*/}
      </Brand>
      <NavbarLinks desktop />
    </Wrapper>
  );
};

export default Navbar;

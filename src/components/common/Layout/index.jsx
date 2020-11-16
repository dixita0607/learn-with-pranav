import React  from 'react';
import { Footer } from 'components/theme';
import { Global } from './styles';
import './fonts.css';

export const Layout = ({ children, socialLinks, email, phone }) => {

  return (
    <>
      <Global />
      {children}
      <Footer socialLinks={socialLinks} email={email} phone={phone} />
    </>
  );
};

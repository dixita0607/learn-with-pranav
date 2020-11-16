import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container } from 'components/common';
import avatar from 'assets/avatar.png';
import { Wrapper, AboutWrapper, Details, Thumbnail } from './styles';

export const About = ({about}) => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper id="about">
      <AboutWrapper as={Container}>
        <Thumbnail>
          <img src={avatar} alt="I’m John and I’m a Backend & Devops engineer!" />
        </Thumbnail>
        <Details theme={theme}>
          <h1>About Pranav</h1>
          <p>{about}</p>
        </Details>
      </AboutWrapper>
    </Wrapper>
  );
};

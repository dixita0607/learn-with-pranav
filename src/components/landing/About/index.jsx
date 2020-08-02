import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container } from 'components/common';
import avatar from 'assets/avatar.png';
import { Wrapper, AboutWrapper, Details, Thumbnail } from './styles';

export const About = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper id="about">
      <AboutWrapper as={Container}>
        <Thumbnail>
          <img src={avatar} alt="I’m John and I’m a Backend & Devops engineer!" />
        </Thumbnail>
        <Details theme={theme}>
          <h1>About Pranav</h1>
          <p>
            A commerce graduate and first attempt Chartered Accountant, Pranav is one the youngest CA Faculties in
            India. He loves Public Speaking and motivating students. His unique approach of teaching helps commerce
            students to get rid of “MATHS PHOBIA”.
          </p>
        </Details>
      </AboutWrapper>
    </Wrapper>
  );
};

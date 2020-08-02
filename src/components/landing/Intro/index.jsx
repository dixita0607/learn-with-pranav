import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { Header } from 'components/theme';
import { Container, Button } from 'components/common';
import { Wrapper, IntroWrapper, Details } from './styles';

export const Intro = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper>
      <Header />
      <IntroWrapper as={Container}>
        <Details theme={theme}>
          <h1>E-Learning | CA. Pranav Popat</h1>
          <h4>Learn with Pranav is an e-learning platform providing interactive educational videos and other resources
            for professional courses exams and other practical courses like MS Excel, Power BI etc.</h4>
          <a href="https://learnwithpranav.stores.instamojo.com/" target="_blank">
            <Button secondary>Buy Courses</Button>
          </a>
        </Details>
      </IntroWrapper>
    </Wrapper>
  );
};

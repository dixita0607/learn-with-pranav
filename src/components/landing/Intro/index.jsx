import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { Header } from 'components/theme';
import { Container } from 'components/common';
import { Wrapper, IntroWrapper, Details, GooglePlayIcon } from './styles';
import googlePlayIcon from 'assets/google-play-badge.png';

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
          <a href="https://play.google.com/store/apps/details?id=co.shield.rchhp" target="_blank">
            <GooglePlayIcon src={googlePlayIcon} alt="App" />
          </a>
        </Details>
      </IntroWrapper>
    </Wrapper>
  );
};

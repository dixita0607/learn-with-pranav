import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { Header } from 'components/theme';
import { Container } from 'components/common';
import { Wrapper, IntroWrapper, Details, GooglePlayIcon } from './styles';
import googlePlayIcon from 'assets/google-play-badge.png';

export const Intro = ({title, brief, appLink}) => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper>
      <Header />
      <IntroWrapper as={Container}>
        <Details theme={theme}>
          <h1>{title}</h1>
          <h4>{brief}</h4>
          <a href={appLink} target="_blank">
            <GooglePlayIcon src={googlePlayIcon} alt="App" />
          </a>
        </Details>
      </IntroWrapper>
    </Wrapper>
  );
};

import React from 'react';
import { Container } from 'components/common';
import { Wrapper, Paragraph } from './styles';

export const Skills = ({ achievements, experience }) => {
  return (
    <Wrapper as={Container}>
      <h1>Achievements</h1>
      {achievements.map(({ achievement }) => <Paragraph>{achievement}</Paragraph>)}
      <br />
      <br />
      <h1>Experience</h1>
      {experience.map(({ line }) => <Paragraph>{line}</Paragraph>)}
    </Wrapper>
  )
}

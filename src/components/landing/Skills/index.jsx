import React from 'react';
import { Container } from 'components/common';
import { Wrapper, Paragraph } from './styles';

export const Skills = () => {
  return (
    <Wrapper as={Container}>
      <h1>Achievements</h1>
      <Paragraph>
        Most loved Maths Faculty for CA Foundation.
      </Paragraph>
      <Paragraph>
        His focused approach targeting Non-Maths Background Commerce Students has been appreciated widely.
      </Paragraph>
      <Paragraph>
        Specially designed concise notes and 100% coverage of ICAI Materials.
      </Paragraph>
      <br/>
      <br/>
      <h1>Experience</h1>
      <Paragraph>
        After qualifying as CA, He worked with Wipro Limited for 2 years in the area of cost control and deal pricing.
        In his 3 years practical training, he earned exposure in the field of Auditing, Industrial Implementation and
        other Financial Services for various corporate as well as PSU clients.
      </Paragraph>
      <Paragraph>
        Since, Last 2 years he is associated with various CA institutes at Pune as independent faculties for Maths,
        Stats and LR at CA Foundation Level & Cost and Management Accounting at CA Inter Level.
      </Paragraph>
    </Wrapper>
  )
}

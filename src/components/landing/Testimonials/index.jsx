import React from 'react';
import { Container, Card } from 'components/common';
import { Wrapper, TestimonialsWrapper, Item } from './style';
import testimonials from './testimonials.json';

export const Testimonials = () => {
  return (
    <Wrapper as={Container} id="testimonials">
      <h1>Testimonials</h1>
      <TestimonialsWrapper>
        {testimonials.map(({ author, quote }) => (
          <Item key={author}>
            <Card>
              <p className="quote">{quote}</p>
              <h4 className="author"> - {author}</h4>
            </Card>
          </Item>
        ))}
      </TestimonialsWrapper>
    </Wrapper>
  )
}

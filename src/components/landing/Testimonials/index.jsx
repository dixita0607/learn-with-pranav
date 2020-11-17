import React from 'react';
import { Container, Card } from 'components/common';
import { Wrapper, TestimonialsWrapper, Item } from './style';
import testimonials from './testimonials.json';

export const Testimonials = ({ testimonials }) => {
  return (
    <Wrapper as={Container} id="testimonials">
      <h1>Testimonials</h1>
      <TestimonialsWrapper>
        {testimonials?.map(({ author, testimonial }) => (
          <Item key={author}>
            <Card>
              <p className="quote">{testimonial}</p>
              <h4 className="author"> - {author}</h4>
            </Card>
          </Item>
        ))}
      </TestimonialsWrapper>
    </Wrapper>
  )
}

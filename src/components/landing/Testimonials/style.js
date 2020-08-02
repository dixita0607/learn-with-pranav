import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 8rem 0;
`;

export const TestimonialsWrapper = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 8fr;
  gap: 1.2rem 1.2rem;

  @media (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`;

export const Item = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.11);
  text-align: right;

  h4 {
    color: #212121;
    padding: 1rem;
    padding-top: 0;
  }

  p {
    color: #707070;
    font-size: 16pt;
    line-height: 2rem;
    padding:  1rem;
    padding-bottom: 0;
  }
`;

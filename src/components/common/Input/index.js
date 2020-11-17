import styled from 'styled-components';

export const Input = styled.input`
  width: 100%;
  box-sizing: border-box;
  border: 2px solid rgb(0, 116, 222);
  padding: 0.8rem 1rem;
  border-radius: 7px;
  margin-bottom: 0.5rem;
  transition: 0.3s;
  &::placeholder {
    color: #a7a7a7;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  box-sizing: border-box;
  border: 2px solid rgb(0, 116, 222);
  padding: 0.8rem 1rem;
  border-radius: 7px;
  margin-bottom: 0.5rem;
  transition: 0.3s;
  min-height: 100px;
  resize: none;
  &::placeholder {
    color: #a7a7a7;
  }
`

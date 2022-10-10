import styled from 'styled-components';

export const TextAreaStyled = styled.textarea`
  height: 2rem;
  padding-bottom: 0.5rem;
  font-size: 1rem;
  line-height: 1.5rem;
  outline: none;
  resize: none;
  overflow-y: hidden;
  border: none;
  border-bottom: 1px solid gainsboro;

  ::placeholder {
    font-size: 0.7rem;
    color: gainsboro;
  }
`;

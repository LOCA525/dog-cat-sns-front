import styled from 'styled-components';

// Login, Join
export const SignInputStyled = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: 3.3rem;
  padding: 0 1rem 0 1rem;
  background: #fff5eb;
  border: 1px solid #e3e3e3;
  border-radius: 10px;
  caret-color: #ff7f00;
`;

// PasswordChange, UserName ...
export const MainInputStyled = styled.input`
  padding-bottom: 0.5rem;
  font-size: 1rem;
  border-bottom: 1px solid gainsboro;

  ::placeholder {
    font-size: 0.7rem;
    color: gainsboro;
  }
`;

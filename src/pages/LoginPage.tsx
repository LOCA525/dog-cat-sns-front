import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import titleLogoImg from '../assets/images/titleLogo.png';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5rem;
`;

const TitleLogo = styled.div`
  margin: 4rem 0 4rem 0;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  box-sizing: border-box;
  width: 400px;
  height: 60px;
  padding: 0 1rem 0 1rem;
  margin-bottom: 0.5rem;
  background: #fff5eb;
  border: 1px solid #e3e3e3;
  border-radius: 10px;
  caret-color: #ff7f00;
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-self: flex-start;
  align-items: center;
`;

const SaveIdCheckLabel = styled.label`
  padding: 0.5rem 0.5rem 0.5rem 0;
  font-size: 0.8rem;
  color: gray;

  :hover {
    color: black;
  }
`;

const SaveIdCheckbox = styled.input`
  margin-right: 0.3rem;
  width: 1rem;
  height: 1rem;
  accent-color: #ff7f00;
`;

const LoginBtn = styled.button`
  margin-top: 0.5rem;
  width: 400px;
  height: 50px;
  background: #ff7f00;
  border-radius: 10px;

  font-size: 1rem;
  font-weight: bold;
  line-height: 23px;
  text-align: center;
  color: #ffffff;

  :hover {
    background: #fca650;
    cursor: pointer;
  }
`;

const JoinLink = styled(Link)`
  font-size: 0.9rem;
  margin-top: 1rem;
`;

function LoginPage() {
  const [id, setId] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <Container>
      <TitleLogo>
        <img src={titleLogoImg} alt="" />
      </TitleLogo>
      <Form>
        <Input
          required
          type="email"
          value={id}
          placeholder="이메일"
          onChange={event => setId(event.currentTarget.value)}
        />
        <Input
          required
          type="password"
          value={password}
          placeholder="비밀번호"
          onChange={event => setPassword(event.currentTarget.value)}
        />
        <CheckboxContainer>
          <SaveIdCheckbox type="checkbox" id="SaveIdCheckbox" />
          <SaveIdCheckLabel htmlFor="SaveIdCheckbox">
            아이디 저장
          </SaveIdCheckLabel>
        </CheckboxContainer>
        <LoginBtn>로그인</LoginBtn>
      </Form>
      <JoinLink to="/join">회원가입</JoinLink>
    </Container>
  );
}

export default LoginPage;

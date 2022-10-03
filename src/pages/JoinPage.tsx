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
  margin-top: 4rem;
`;

const HeaderText = styled.h3`
  margin-top: 2rem;
  color: gray;
`;

const Form = styled.form`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  box-sizing: border-box;
  width: 400px;
  height: 60px;
  padding: 0 1rem 0 1rem;
  margin-top: 0.5rem;
  background: #fff5eb;
  border: 1px solid #e3e3e3;
  border-radius: 10px;
  caret-color: #ff7f00;
`;

const JoinBtn = styled.button`
  margin-top: 1rem;
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

const LoginNotice = styled.label`
  font-size: 0.9rem;
`;

const LoginLink = styled(Link)`
  color: #ff7f00;

  :hover {
    color: #fdbb79;
  }
`;

function JoinPage() {
  const [email, setEmail] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <Container>
      <TitleLogo>
        <img src={titleLogoImg} alt="titleLogoImg" />
      </TitleLogo>
      <HeaderText>
        친구들의 고양이와 강아지의 사진과 <br />
        동영상을 보려면 가입하세요.
      </HeaderText>
      <Form>
        <Input
          required
          type="email"
          value={email}
          placeholder="이메일"
          onChange={event => setEmail(event.currentTarget.value)}
        />
        <Input
          required
          type="text"
          value={name}
          placeholder="사용자 이름"
          onChange={event => setName(event.currentTarget.value)}
        />
        <Input
          required
          type="password"
          value={password}
          placeholder="비밀번호"
          onChange={event => setPassword(event.currentTarget.value)}
        />
        <JoinBtn>가입</JoinBtn>
      </Form>
      <LoginNotice>
        {'계정이 있으신가요? '}
        <LoginLink to="/login">로그인</LoginLink>
      </LoginNotice>
    </Container>
  );
}

export default JoinPage;

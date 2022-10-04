import { useState } from 'react';
import styled from 'styled-components';
import BottomNav from '../components/BottomNav';
import Header from '../components/Header';

function PasswordChangePage() {
  const [currentPassword, setCurrentPassword] = useState<string>('');
  const [newPassword, setNewPassword] = useState<string>('');
  const [confirmNewPassword, setConfirmNewPassword] = useState<string>('');

  return (
    <>
      <Header />
      <MainContainer>
        <Form>
          <Description>
            비밀번호는 최소 6자 이상이어야 하며 숫자, 영문, 특수 문자를 <br />
            포함해야 합니다.
          </Description>
          <InputContainer>
            <InputLabel>현재 비밀번호</InputLabel>
            <Input
              required
              type="password"
              placeholder="현재 비밀번호를 입력해주세요"
              value={currentPassword}
              onChange={event => setCurrentPassword(event.currentTarget.value)}
            />
          </InputContainer>
          <InputContainer>
            <InputLabel>새 비밀번호</InputLabel>
            <Input
              required
              type="password"
              placeholder="새로운 비밀번호를 입력해주세요"
              value={newPassword}
              onChange={event => setNewPassword(event.currentTarget.value)}
            />
          </InputContainer>
          <InputContainer>
            <InputLabel>새 비밀번호 확인</InputLabel>
            <Input
              required
              type="password"
              placeholder="새로운 비밀번호 확인을 위해 한번 더 입력해주세요"
              value={confirmNewPassword}
              onChange={event =>
                setConfirmNewPassword(event.currentTarget.value)
              }
            />
          </InputContainer>
        </Form>
      </MainContainer>
      <BottomNav />
    </>
  );
}

export default PasswordChangePage;

const MainContainer = styled.div`
  margin: 1rem;
`;

const Description = styled.label`
  color: gray;
  font-size: 1rem;
  line-height: 2rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const InputContainer = styled.div`
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
`;

const InputLabel = styled.label`
  margin-bottom: 0.5rem;
  font-size: 0.8rem;
  color: gray;
`;

const Input = styled.input`
  padding-bottom: 0.5rem;
  font-size: 1rem;
  border-bottom: 1px solid gainsboro;

  ::placeholder {
    font-size: 0.7rem;
  }
`;

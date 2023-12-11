import { useState } from 'react';
import styled from 'styled-components';
import { FormStyled } from '../../styles/Account/FormStyles';
import { MainInputStyled } from '../../styles/Account/InputStyles';
import Input from '../common/Input';

function PasswordChangeForm() {
  const [currentPassword, setCurrentPassword] = useState<string>('');
  const [newPassword, setNewPassword] = useState<string>('');
  const [confirmNewPassword, setConfirmNewPassword] = useState<string>('');

  return (
    <Container>
      <FormStyled>
        <Description>비밀번호는 최소 6자 이상이어야 하며 숫자, 영문, 특수 문자(!@#$)를 포함해야 합니다.</Description>
        <InputContainer>
          <InputLabel>현재 비밀번호</InputLabel>
          <Input
            type="password"
            required
            RenderComponent={MainInputStyled}
            placeholder="현재 비밀번호를 입력해주세요"
            value={currentPassword}
            setValue={setCurrentPassword}
          />
        </InputContainer>
        <InputContainer>
          <InputLabel>새 비밀번호</InputLabel>
          <Input
            type="password"
            required
            RenderComponent={MainInputStyled}
            value={newPassword}
            setValue={setNewPassword}
            placeholder="새로운 비밀번호를 입력해주세요"
          />
        </InputContainer>
        <InputContainer>
          <InputLabel>새 비밀번호 확인</InputLabel>
          <Input
            type="password"
            required
            RenderComponent={MainInputStyled}
            value={confirmNewPassword}
            setValue={setConfirmNewPassword}
            placeholder="새로운 비밀번호 확인을 위해 한번 더 입력해주세요"
          />
        </InputContainer>
      </FormStyled>
    </Container>
  );
}

export default PasswordChangeForm;

const Container = styled.div`
  margin: 1rem;
`;

const Description = styled.label`
  color: gray;
  font-size: 1rem;
  line-height: 2rem;
  margin-bottom: 1rem;
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

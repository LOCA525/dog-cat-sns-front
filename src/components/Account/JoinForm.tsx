import { useState } from 'react';
import { SignSubmitBtnStyled } from '../../styles/Account/BtnStyles';
import { SignFormStyled } from '../../styles/Account/FormStyled';
import { SignInputStyled } from '../../styles/Account/InputStyles';
import EmailInput from '../common/Input/EmailInput';
import NameInput from '../common/Input/NameInput';
import PasswordInput from '../common/Input/PasswordInput';

function JoinForm() {
  const [email, setEmail] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <SignFormStyled>
      <EmailInput
        required
        WrappedComponent={SignInputStyled}
        value={email}
        setValue={setEmail}
        placeholder="이메일"
      />
      <NameInput
        required
        WrappedComponent={SignInputStyled}
        placeholder="사용자 이름"
        value={name}
        setValue={setName}
      />
      <PasswordInput
        required
        WrappedComponent={SignInputStyled}
        placeholder="비밀번호"
        value={password}
        setValue={setPassword}
      />
      <SignSubmitBtnStyled>가입</SignSubmitBtnStyled>
    </SignFormStyled>
  );
}

export default JoinForm;

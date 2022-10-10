import { useState } from 'react';
import { SignSubmitBtnStyled } from '../../styles/Account/BtnStyles';
import { SignFormStyled } from '../../styles/Account/FormStyled';
import { SignInputStyled } from '../../styles/Account/InputStyles';
import EmailInput from '../common/Input/EmailInput';
import PasswordInput from '../common/Input/PasswordInput';
import LoginCheckbox from './LoginCheckbox';

function LoginForm() {
  const [email, setEmail] = useState<string>('');
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
      <PasswordInput
        required
        WrappedComponent={SignInputStyled}
        value={password}
        setValue={setPassword}
        placeholder="비밀번호"
      />
      <LoginCheckbox setUserId={setEmail} />
      <SignSubmitBtnStyled>로그인</SignSubmitBtnStyled>
    </SignFormStyled>
  );
}

export default LoginForm;

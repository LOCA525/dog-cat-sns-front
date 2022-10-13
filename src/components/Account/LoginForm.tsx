import { useState } from 'react';
import { SignSubmitBtnStyled } from '../../styles/Account/BtnStyles';
import { SignFormStyled } from '../../styles/Account/FormStyles';
import { SignInputStyled } from '../../styles/Account/InputStyles';
import Input from '../common/Input';
import LoginCheckbox from './LoginCheckbox';

function LoginForm() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <SignFormStyled>
      <Input
        type="email"
        required
        RenderComponent={SignInputStyled}
        value={email}
        setValue={setEmail}
        placeholder="이메일"
      />
      <Input
        type="password"
        required
        RenderComponent={SignInputStyled}
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

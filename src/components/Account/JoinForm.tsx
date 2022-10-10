import { useState, MouseEvent } from 'react';
// import isStrongPassword from 'validator/lib/isStrongPassword';
import { SignSubmitBtnStyled } from '../../styles/Account/BtnStyles';
import { SignFormStyled } from '../../styles/Account/FormStyles';
import { SignInputStyled } from '../../styles/Account/InputStyles';
import Input from '../common/Input';

function JoinForm() {
  const [email, setEmail] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  function handleSubmit(event: MouseEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log('email:', email);
    console.log('name:', name);
    console.log('password:', password);

    console.log('submit');
  }

  return (
    <SignFormStyled onSubmit={handleSubmit}>
      <Input
        required
        notEnterSubmit
        type="email"
        value={email}
        setValue={setEmail}
        RenderComponent={SignInputStyled}
        placeholder="이메일(필수)"
        limit={255}
      />
      <Input
        required
        notEnterSubmit
        type="text"
        value={name}
        setValue={setName}
        RenderComponent={SignInputStyled}
        placeholder="사용자 이름(필수)"
        validator={/^[A-za-z]{1,}([A-za-z\d]){3,}$/}
        validatorErrorMessage="사용자 이름은 최소 4자 이상이어야 하며 영문으로 시작하는 영문 또는 숫자입니다. ex)love, lo12 ..."
        limit={16}
      />
      <Input
        required
        notEnterSubmit
        type="password"
        value={password}
        setValue={setPassword}
        RenderComponent={SignInputStyled}
        placeholder="비밀번호(필수)"
        validator={/^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$])[A-Za-z\d!@#$]{6,}$/}
        validatorErrorMessage="비밀번호는 최소 6자 이상이어야 하며 숫자, 영문, 특수 문자(!@#$)를 포함해야
        합니다."
        limit={32}
      />
      <SignSubmitBtnStyled>가입</SignSubmitBtnStyled>
    </SignFormStyled>
  );
}

export default JoinForm;

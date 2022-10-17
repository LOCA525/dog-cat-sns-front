import { useState, MouseEvent } from 'react';
import axios, { type AxiosError, type AxiosResponse } from 'axios';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import usePostLogin from '../../hooks/usePostLogin';
import useSetLocalUserId from '../../hooks/useSetLocalUserId';
import { saveIdCheckboxState } from '../../store/loginChecked';
import { SignSubmitBtnStyled } from '../../styles/Account/BtnStyles';
import { SignFormStyled } from '../../styles/Account/FormStyles';
import { SignInputStyled } from '../../styles/Account/InputStyles';
import Input from '../common/Input';
import LoginCheckbox from './LoginCheckbox';

function LoginForm() {
  const navigate = useNavigate();
  const mutateLogin = usePostLogin();
  const saveUserEmail = useSetLocalUserId();
  const isSaveIdCheck = useRecoilValue(saveIdCheckboxState);

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  function handleSubmit(event: MouseEvent<HTMLFormElement>) {
    event.preventDefault();
    mutateLogin(
      { email, password },
      {
        onSuccess: (response: AxiosResponse<string, unknown>) => {
          alert(response?.data);
          if (isSaveIdCheck) {
            saveUserEmail(email);
          } else {
            saveUserEmail('');
          }
          navigate('/');
        },
        onError: error => {
          if (axios.isAxiosError(error)) {
            const { response } = error as AxiosError;
            if (response?.status === 401) {
              alert('아이디 또는 비밀번호가 맞지 않습니다.');
            } else {
              alert('오류 발생');
            }
          } else {
            console.error(error);
          }
        },
      },
    );
  }

  return (
    <SignFormStyled onSubmit={handleSubmit}>
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

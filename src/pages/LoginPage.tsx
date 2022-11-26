import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import LoginForm from '../components/Account/LoginForm';
import LoginNavigation from '../components/Account/LoginNavigation';
import TitleLogo from '../components/TitleLogo';
import useGetAccount from '../hooks/ussGetAccount';

function LoginPage() {
  const navigator = useNavigate();
  const [account, setAccount] = useState<any>(null);
  const getAccount = useGetAccount(setAccount);

  // 로그인 되어 있으면 메인 화면으로 이동
  async function loginChecked() {
    let data = null;
    data = await getAccount();
    console.log('data', data);

    if (data) {
      // navigator('/');
    }
  }

  useEffect(() => {
    loginChecked();
  }, []);

  return (
    <Container>
      <FormContainer>
        <TitleLogo style={{ marginTop: '4rem' }} />
        <HeaderText>친구들의 고양이와 강아지의 사진과 동영상을 보려면 로그인 하세요.</HeaderText>
        <LoginForm />
        <LoginNavigation />
      </FormContainer>
    </Container>
  );
}

export default LoginPage;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const HeaderText = styled.h3`
  margin: 2rem 0 2rem 0;
  color: gray;
  width: 75%;
`;

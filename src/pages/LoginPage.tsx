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
    if (data) {
      navigator('/');
    }
  }

  useEffect(() => {
    loginChecked();
  }, []);

  return (
    <Container>
      <TitleLogo style={{ margin: '4rem' }} />
      <LoginForm />
      <LoginNavigation />
    </Container>
  );
}

export default LoginPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 7rem;
`;

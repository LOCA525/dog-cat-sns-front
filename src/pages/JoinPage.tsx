import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import JoinForm from '../components/Account/JoinForm';
import JoinNavigation from '../components/Account/JoinNavigation';
import TitleLogo from '../components/TitleLogo';
import useGetAccount from '../hooks/ussGetAccount';

function JoinPage() {
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
      <TitleLogo style={{ marginTop: '4rem' }} />
      <HeaderText>친구들의 고양이와 강아지의 사진과 동영상을 보려면 가입하세요.</HeaderText>
      <JoinForm />
      <JoinNavigation />
    </Container>
  );
}

export default JoinPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 7rem;
`;

const HeaderText = styled.h3`
  margin: 2rem 0 2rem 0;
  color: gray;
  width: 75%;
`;

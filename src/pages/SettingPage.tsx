import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as KeyIcon } from '../assets/images/icons/keyIcon.svg';
import { ReactComponent as ProfileIcon } from '../assets/images/icons/profileIcon.svg';
import BottomNav from '../components/BottomNav/BottomNav';
import UserHeader from '../components/UserHeader';
import useGetAccount from '../hooks/ussGetAccount';

function SettingPage() {
  const navigator = useNavigate();
  const [account, setAccount] = useState<any>(null);
  const getAccount = useGetAccount(setAccount);

  async function loginChecked() {
    const data = await getAccount();
    if (!data) {
      alert('로그인이 필요합니다! 로그인 화면으로 이동합니다.');
      navigator('/login');
    }
  }

  useEffect(() => {
    loginChecked();
  }, []);

  return (
    <div>
      <UserHeader headerTitle="설정" />
      <Container>
        <MainContainer>
          <LinkStyled to="/accounts/edit">
            <ProfileIconStyled />
            <Label>프로필 변경</Label>
          </LinkStyled>
          <LinkStyled to="/accounts/password/change">
            <KeyIconStyled />
            <Label>비밀번호 변경</Label>
          </LinkStyled>
        </MainContainer>
        <BottomNav />
      </Container>
    </div>
  );
}

export default SettingPage;

const Container = styled.div`
  padding-top: 60px;
`;

const MainContainer = styled.div`
  margin: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const LinkStyled = styled(Link)`
  display: flex;
  align-items: center;
  fill: grey;
  color: grey;

  :hover {
    fill: gainsboro;
  }
`;

const Label = styled.p`
  padding-left: 0.5rem;
`;

const ProfileIconStyled = styled(ProfileIcon)`
  width: 24px;
  height: 24px;
`;

const KeyIconStyled = styled(KeyIcon)`
  width: 24px;
  height: 24px;
`;

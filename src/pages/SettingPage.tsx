import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as KeyIcon } from '../assets/images/icons/keyIcon.svg';
import { ReactComponent as ProfileIcon } from '../assets/images/icons/profileIcon.svg';
import BottomNav from '../components/BottomNav';
import Header from '../components/Header';

function SettingPage() {
  return (
    <>
      <Header />
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
    </>
  );
}

export default SettingPage;

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

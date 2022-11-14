import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import ProfileEditForm from '../components/Account/ProfileEditForm';
import BottomNav from '../components/BottomNav/BottomNav';
import UserHeader from '../components/UserHeader';
import useGetAccount from '../hooks/ussGetAccount';

function ProfileEditPage() {
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
      <UserHeader headerTitle="프로필 편집" />
      <Container>
        <ProfileEditForm account={account} />
        <BottomNav />
      </Container>
    </div>
  );
}

const Container = styled.div`
  padding-top: 60px;
  height: calc(100vh - 60px);
  overflow-y: scroll;
`;
export default ProfileEditPage;

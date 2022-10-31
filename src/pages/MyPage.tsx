import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { getMypageData } from '../api/myPage';
import BottomNav from '../components/BottomNav';
import UserFeeds from '../components/UserFeeds';
import UserHeader from '../components/UserHeader';
import UserProfile from '../components/UserProfile';
import { cardUserId } from '../store/cardUserId';

function MyPage() {
  const userId = useRecoilValue<number>(cardUserId);
  const [userData, setUserData] = useState<any>('');

  const getMypage = async () => {
    try {
      const res = await getMypageData(userId);
      if (res.status === 200) {
        const res = await getMypageData(userId);
        console.log('가져오기성공', res);
        const data = res.data;
        setUserData(data);
      }
    } catch (error) {
      console.log('마이페이지가져오기에러', error);
    }
  };
  useEffect(() => {
    getMypage();
    console.log('userData', userData);
  }, []);
  return (
    <div>
      <UserHeader headerTitle={userData.username} />
      <Container>
        <UserProfile userData={userData} userId={userId} />
        <UserFeeds />
      </Container>
      <BottomNav />
    </div>
  );
}

export default MyPage;

const Container = styled.div`
  height: calc(100vh - 110px);
  overflow-y: auto;
`;

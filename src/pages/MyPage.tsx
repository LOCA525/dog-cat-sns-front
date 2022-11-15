import { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { getMypageData } from '../api/myPage';
import BottomNav from '../components/BottomNav/BottomNav';
import Loading from '../components/Loading/Loading';
import UserFeeds from '../components/UserFeeds/UserFeeds';
import UserHeader from '../components/UserHeader';
import UserProfile from '../components/UserProfile';
import { cardUserId } from '../store/cardUserId';
import { detailCardUserName } from '../store/detailCardId';

function MyPage() {
  const userId = useRecoilValue<number>(cardUserId);
  const [userData, setUserData] = useState<any>('');
  const [isFollow, setIsFollow] = useState(false);
  const [isProfileImage, setIsProfileImage] = useState(false);
  const [, setDetailcardUserName] = useRecoilState(detailCardUserName);
  const [isLoading, setIsLoading] = useState(true);

  const getMypage = async () => {
    setIsLoading(true);
    try {
      const res = await getMypageData(userId);
      if (res.status === 200) {
        const res = await getMypageData(userId);
        console.log('가져오기성공', res);
        const data = res.data;
        setUserData(data);
        setDetailcardUserName(data.username);
        //이 유저를 팔로우 했는지 아닌지 체크 하고 isfollow 값 변경
        if (data.checkFollower.length === 0) {
          setIsFollow(false);
        } else if (data.checkFollower.length === 1) {
          setIsFollow(true);
        }
        if (data.Profile === null) {
          setIsProfileImage(false);
        } else {
          setIsProfileImage(true);
        }
        setIsLoading(false);
      }
    } catch (error) {
      console.log('마이페이지가져오기에러', error);
    }
  };

  useEffect(() => {
    getMypage();
  }, []);
  return (
    <div>
      <UserHeader headerTitle={userData.username} />
      {isLoading && <Loading />}
      <Container>
        <UserProfile
          userData={userData}
          userId={userId}
          isFollow={isFollow}
          isProfileImage={isProfileImage}
          setIsFollow={setIsFollow}
          getMyPage={getMypage}
        />
        <UserFeeds userData={userData} />
      </Container>
      <BottomNav />
    </div>
  );
}

export default MyPage;

const Container = styled.div`
  padding-top: 60px;
  height: calc(100vh - 60px);
  overflow-y: auto;
`;

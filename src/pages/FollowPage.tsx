import { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { getFollowApi } from '../api/account';
import BottomNav from '../components/BottomNav/BottomNav';
import UserCard from '../components/UserCard/UserCard';
import UserHeader from '../components/UserHeader';
import { followListUserId, followListUserName, isFollowerList } from '../store/FollowPage';
import { modeState } from '../store/themeColor';

function FollowPage() {
  const { buttonColor } = useRecoilValue(modeState);
  const userName = useRecoilValue(followListUserName);
  const userId = useRecoilValue(followListUserId);
  const [isFollower, setIsFollower] = useRecoilState(isFollowerList);
  const [followerList, setFollowerList] = useState([]);
  const [followingList, setFollowingList] = useState([]);
  const FollowerClick = () => {
    setIsFollower(true);
  };
  const FollowingClick = () => {
    setIsFollower(false);
  };

  const getFollow = async () => {
    try {
      const res = await getFollowApi(userId);
      if (res.status === 200) {
        const res = await getFollowApi(userId);
        console.log('리스트불러오기', res);
        setFollowerList(res.data.Follower);
        setFollowingList(res.data.Following);
      }
    } catch (error) {
      console.log('실패', error);
    }
  };

  useEffect(() => {
    getFollow();
  }, []);

  return (
    <Container>
      <UserHeader headerTitle={userName} />
      <FollowPageContainer>
        <TabBtn>
          <FollowerBtn
            onClick={FollowerClick}
            borderColor={isFollower ? buttonColor : 'rgb(223,227,232)'}
            fontColor={isFollower ? '#000000' : '#8E8E8E'}
          >
            팔로워
          </FollowerBtn>
          <FollowingBtn
            onClick={FollowingClick}
            borderColor={isFollower ? 'rgb(223,227,232)' : buttonColor}
            fontColor={isFollower ? '#8E8E8E' : '#000000'}
          >
            팔로잉
          </FollowingBtn>
        </TabBtn>
        <BoardContainer>
          {isFollower
            ? followerList.map((item: any) => {
                return <UserCard key={item.id} item={item} />;
              })
            : followingList.map((item: any) => {
                return <UserCard key={item.id} item={item} />;
              })}
        </BoardContainer>
      </FollowPageContainer>
      <BottomNav />
    </Container>
  );
}

const Container = styled.div``;

const FollowPageContainer = styled.div`
  padding-top: 60px;
`;

const TabBtn = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-around;
  font-weight: 800;
`;

const FollowerBtn = styled.div<{ borderColor: string; fontColor: string }>`
  cursor: pointer;
  border-bottom: 2px solid ${props => props.borderColor};
  color: ${props => props.fontColor};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;
`;

const FollowingBtn = styled.div<{ borderColor: string; fontColor: string }>`
  cursor: pointer;
  border-bottom: 2px solid ${props => props.borderColor};
  color: ${props => props.fontColor};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;
`;

const BoardContainer = styled.div`
  height: calc(100vh - 120px);
  overflow-y: scroll;
  padding: 20px 70px 20px 70px;
`;

export default FollowPage;

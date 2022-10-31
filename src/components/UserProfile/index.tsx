import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { loginUserId } from '../../store/loginUser';
import { modeState } from '../../store/themeColor';

function UserProfile({ userData, userId }: any) {
  const { buttonColor, hoverColor } = useRecoilValue(modeState);
  const loginId = useRecoilValue(loginUserId);
  const [isYours, setIsYours] = useState(false);

  useEffect(() => {
    if (userId === loginId) {
      setIsYours(true);
    } else {
      setIsYours(false);
    }
  }, []);
  return (
    <Container>
      <ProfileContainer>
        <UserImage />
        <CountContainer>
          <FeedCount>
            <span>{userData.BoardList?.length}</span>
            <div>게시물</div>
          </FeedCount>
          <FollowerCount>
            <span>{userData.follower}</span>
            <div>팔로워</div>
          </FollowerCount>
          <FollowingCount>
            <span>{userData.following}</span>
            <div>팔로잉</div>
          </FollowingCount>
        </CountContainer>
      </ProfileContainer>
      <Introduce>{userData.intro}</Introduce>
      <FollowBtnContainer>
        {isYours ? (
          <FollowBtn color={buttonColor} hover={hoverColor}>
            프로필편집
          </FollowBtn>
        ) : (
          <FollowBtn color={buttonColor} hover={hoverColor}>
            팔로우
          </FollowBtn>
        )}
      </FollowBtnContainer>
    </Container>
  );
}
export default UserProfile;

const Container = styled.div`
  padding: 20px;
  width: 100%;
  border-bottom: 1px solid rgb(223, 227, 232);
`;
const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  text-align: center;
  margin-bottom: 10px;
  span {
    font-weight: bold;
  }
`;
const CountContainer = styled.div`
  width: calc(100% - 90px);
  justify-content: space-around;
  display: flex;
`;
const UserImage = styled.div`
  width: 90px;
  height: 90px;
  border-radius: 50px;
  background-color: red;
`;

const FeedCount = styled.div`
  div {
    font-weight: 500;
  }
`;

const FollowerCount = styled.div`
  div {
    font-weight: 500;
  }
`;

const FollowingCount = styled.div`
  div {
    font-weight: 500;
  }
`;

const FollowBtnContainer = styled.div`
  width: 100%;
`;

const FollowBtn = styled.div<{ hover: string }>`
  width: 100%;
  height: 30px;
  font-weight: bold;
  color: #ffff;
  background-color: ${props => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  margin-right: 30px;
  margin-top: 20px;
  :hover {
    background-color: ${props => props.hover};
  }
`;

const Introduce = styled.div`
  padding-top: 20px;
  font-weight: 600;
  /* max-width: 335px; */
`;

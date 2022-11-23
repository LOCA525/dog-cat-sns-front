import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { deleteFollowApi, postFollowApi } from '../../api/account';
import noProfileImage from '../../assets/images/profile3.png';
import { followListUserId, followListUserName, isFollowerList } from '../../store/FollowPage';
import { loginUserId } from '../../store/loginUser';
import { modeState } from '../../store/themeColor';

function UserProfile({ userData, userId, isFollow, getMyPage, isProfileImage }: any) {
  const logInUserId = useRecoilValue(loginUserId);
  const loginId = useRecoilValue(loginUserId);
  const [isYours, setIsYours] = useState(false);
  const { buttonColor, hoverColor } = useRecoilValue(modeState);
  const [, setFollowListUser] = useRecoilState(followListUserId);
  const [, setIsFollowerClick] = useRecoilState(isFollowerList);
  const [, setUserName] = useRecoilState(followListUserName);
  const navigate = useNavigate();

  useEffect(() => {
    if (userId === loginId) {
      setIsYours(true);
    } else {
      setIsYours(false);
    }
  }, []);

  const handleFollowClick = async () => {
    const followBody = {
      from: logInUserId, //로그인중인 유저 아이디
      to: userId, //팔로우하려는 유저 아이디
    };
    if (isFollow === false) {
      try {
        const res = await postFollowApi(logInUserId, followBody);
        if (res.status === 200) {
          const res = await postFollowApi(logInUserId, followBody);
          console.log('팔로우성공', res);
          getMyPage();
        }
      } catch (error) {
        console.log('팔로우실패', error);
      }
    } else {
      try {
        const res = await deleteFollowApi(logInUserId, followBody);
        if (res.status === 200) {
          const res = await deleteFollowApi(logInUserId, followBody);
          console.log('팔로우취소성공', res);
          getMyPage();
        }
      } catch (error) {
        console.log('팔로우취소실패', error);
      }
    }
  };

  const navigateFollowerClick = () => {
    setFollowListUser(userId);
    setIsFollowerClick(true);
    setUserName(userData.username);
    navigate(`/myPage/${userData.username}/follow`);
  };

  const navigateFollowingClick = () => {
    setFollowListUser(userId);
    setIsFollowerClick(false);
    setUserName(userData.username);
    navigate(`/myPage/${userData.username}/follow`);
  };

  return (
    <Container>
      <ProfileContainer>
        <UserImageContainer>
          <UserImage
            src={isProfileImage ? `http://43.201.89.17:3030/api/image/${userData.Profile?.url}` : noProfileImage}
          />
        </UserImageContainer>
        <CountContainer>
          <FeedCount>
            <span>{userData.BoardList?.length}</span>
            <div>게시물</div>
          </FeedCount>
          <FollowerCount onClick={navigateFollowerClick}>
            <span>{userData.follower}</span>
            <div>팔로워</div>
          </FollowerCount>
          <FollowingCount onClick={navigateFollowingClick}>
            <span>{userData.following}</span>
            <div>팔로잉</div>
          </FollowingCount>
        </CountContainer>
      </ProfileContainer>
      <Introduce>{userData.intro}</Introduce>
      <FollowBtnContainer>
        {isYours ? (
          <FollowBtn
            color={buttonColor}
            hover={hoverColor}
            onClick={() => {
              navigate('/accounts/edit');
            }}
          >
            프로필편집
          </FollowBtn>
        ) : (
          <FollowBtn onClick={handleFollowClick} color={buttonColor} hover={hoverColor}>
            {isFollow ? '팔로우 취소' : '팔로우'}
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
const UserImageContainer = styled.div`
  width: 90px;
  height: 90px;
  border-radius: 50px;
`;
const UserImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50px;
`;

const FeedCount = styled.div`
  div {
    font-weight: 500;
  }
`;

const FollowerCount = styled.div`
  cursor: pointer;
  div {
    font-weight: 500;
  }
`;

const FollowingCount = styled.div`
  cursor: pointer;
  div {
    font-weight: 500;
  }
`;

const FollowBtnContainer = styled.div`
  width: 100%;
  cursor: pointer;
`;

const FollowBtn = styled.div<{ hover: string }>`
  width: 100%;
  height: 40px;
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

import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { modeState } from '../../store/themeColor';

function UserProfile() {
  const current = useRecoilValue(modeState);
  const buttonColor = current.buttonColor;
  const hoverColor = current.hoverColor;

  return (
    <Container>
      <ProfileContainer>
        <UserImage />
        <CountContainer>
          <FeedCount>
            <span>17</span>
            <div>게시물</div>
          </FeedCount>
          <FollowerCount>
            <span>195</span>
            <div>팔로워</div>
          </FollowerCount>
          <FollowingCount>
            <span>31</span>
            <div>팔로잉</div>
          </FollowingCount>
        </CountContainer>
      </ProfileContainer>
      <Introduce>
        귀여운 강아지와 고양이를 좋아하는 사람입니다. 애견 용품도 중고
        판매중이에요 살펴보고 가세요. 중고거래는 댓글남겨주세요 !
      </Introduce>
      <FollowBtnContainer>
        <FollowBtn color={buttonColor} hover={hoverColor}>
          팔로우
        </FollowBtn>
        {/* <FollowBtn>프로필편집</FollowBtn> */}
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

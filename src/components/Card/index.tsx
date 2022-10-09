import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { ReactComponent as BookMarkBtn } from '../../assets/images/bookmark.svg';
import { ReactComponent as CommentBtn } from '../../assets/images/comment.svg';
import exampleDogImage from '../../assets/images/example.jpeg';
import { ReactComponent as HeartBtn } from '../../assets/images/heart.svg';
import { modeState } from '../../store/themeColor';

function Card() {
  const { buttonColor } = useRecoilValue(modeState);

  return (
    <CardContainer>
      <HeaderContainer>
        <UserContainer>
          <UserImage />
          <UserNickName>HELLOLOCA</UserNickName>
        </UserContainer>
      </HeaderContainer>
      <CardImage />

      <ButtonContainer>
        <HeartCommentContainer>
          <HeartBtn
            width={'30px'}
            height={'30px'}
            fill={'#ffff'}
            stroke={buttonColor}
          />
          <CommentBtn
            width={'30px'}
            height={'30px'}
            fill={buttonColor}
            stroke={buttonColor}
          />
        </HeartCommentContainer>
        <BookMarkBtn width={'32px'} height={'32px'} fill={buttonColor} />
      </ButtonContainer>
      <HeartCount>좋아요 621개</HeartCount>
      <TextContainer>
        <UserNickName>HELLOLOCA</UserNickName>
        <CardText>
          반갑습니다 여러분 안녕하세요 하이하이 우리 멍멍이 참 귀엽죠 ? 더많은
          사진을 보고싶으면 저를 팔로우 해주세요 !!!반갑습니다 여러분 안녕하세요
          하이하이 우리 멍멍이 참 귀엽죠 ? 더많은 사진을 보고싶으면 저를 팔로우
          해주세요 !!!진을 보고싶으면 저를 팔로우 해주세요 !!!반갑습니다 여러분
          안
        </CardText>
      </TextContainer>
      <CommentCount>댓글 11개</CommentCount>
      <Date>2022년 2월 2일</Date>
    </CardContainer>
  );
}

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 12px;
  max-width: 470px;
  width: 100%;
  border: 1px solid #e8e8e8;
  border-radius: 30px;
  background-color: #fff;
  padding-bottom: 20px;
`;

const HeaderContainer = styled.div`
  padding: 9px;
  width: 100%;
  height: 55px;
  border-bottom: 1px solid #e8e8e8;
`;
const UserContainer = styled.div`
  display: flex;
  align-items: center;
`;
const UserImage = styled.div`
  margin-right: 12px;
  width: 37px;
  height: 37px;
  border-radius: 20px;
  background-color: red;
`;
const UserNickName = styled.div`
  font-size: 14px;
  font-weight: bold;
`;
const CardImage = styled.div`
  width: 100%;
  padding-bottom: 100%;
  background-image: url(${exampleDogImage});
  background-color: #000;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px 10px 20px;
`;
const HeartCommentContainer = styled.div`
  justify-content: space-between;
  width: 70px;
  display: flex;
`;

const HeartCount = styled.div`
  font-size: 14px;
  font-weight: bold;
  padding-left: 20px;
  padding-bottom: 10px;
`;
const CommentCount = styled.div`
  font-size: 14px;
  color: #8e8e8e;
  padding-left: 20px;
  padding-bottom: 8px;
`;
const TextContainer = styled.div`
  font-weight: 400;
  font-size: 14px;
  padding: 0 20px 8px 20px;
`;
const CardText = styled.div``;
const Date = styled.div`
  font-size: 10px;
  color: #8e8e8e;
  padding-right: 20px;
  text-align: right;
`;

export default Card;

import React from 'react';
import styled from 'styled-components';
import bookMarkBtn from '../../assets/images/Bookmark.png';
import commentBtn from '../../assets/images/Comment.png';
import exampleDogImage from '../../assets/images/dog.png';
import heartBtn from '../../assets/images/Heart.png';

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 12px;
  max-width: 470px;
  width: 100%;
  height: 100%;
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
  max-width: 468px;
  width: 100%;
  max-height: 500px;
  height: 100%;
  background-color: #000;
  background-image: url(${exampleDogImage});
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
const HeartCommentContainer = styled.div``;
const HeartBtn = styled.img`
  width: 25px;
  height: 25px;
  margin-right: 15px;
`;
const CommentBtn = styled.img`
  width: 25px;
  height: 25px;
`;
const BookMarkBtn = styled.img`
  width: 27px;
  height: 29px;
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

function Card() {
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
          <HeartBtn src={heartBtn} />
          <CommentBtn src={commentBtn} />
        </HeartCommentContainer>

        <BookMarkBtn src={bookMarkBtn} />
      </ButtonContainer>
      <HeartCount>좋아요 621개</HeartCount>
      <TextContainer>
        <UserNickName>HELLOLOCA</UserNickName>
        <CardText>
          반갑습니다 여러분 안녕하세요 하이하이 우리 멍멍이 참 귀엽죠 ? 더많은
          사진을 보고싶으면 저를 팔로우 해주세요 !!
        </CardText>
      </TextContainer>
      <CommentCount>댓글 11개</CommentCount>
      <Date>2022년 2월 2일</Date>
    </CardContainer>
  );
}

export default Card;

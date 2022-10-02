import React from 'react';
import styled from 'styled-components';
import exampleDogImage from '../../assets/images/dog.png';

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
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 9px;
  width: 100%;
  height: 55px;
  border-bottom: 1px solid #e8e8e8;
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
const ButtonContainer = styled.div``;
const HeartBtn = styled.div``;
const CommentBtn = styled.div``;
const ShareBtn = styled.div``;
const TextContainer = styled.div``;
const CardText = styled.div``;
function Card() {
  return (
    <CardContainer>
      <HeaderContainer>
        <UserImage />
        <UserNickName>HELLOLOCA</UserNickName>
      </HeaderContainer>

      <CardImage />

      <ButtonContainer>
        <HeartBtn />
        <CommentBtn />
        <ShareBtn />
      </ButtonContainer>

      <TextContainer>
        <CardText>우리 멍멍이 참 귀엽죠 ?</CardText>
      </TextContainer>
    </CardContainer>
  );
}

export default Card;

import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { ReactComponent as BookMarkBtn } from '../../assets/images/bookmark.svg';
import { ReactComponent as CommentBtn } from '../../assets/images/comment.svg';
import { ReactComponent as HeartBtn } from '../../assets/images/heart.svg';
import { ReactComponent as MoreBtn } from '../../assets/images/more.svg';
import { modeState } from '../../store/themeColor';
import Modal from './Modal';
import ValidationModal from './ValidationModal';

function Card({ item }: any) {
  const { buttonColor } = useRecoilValue(modeState);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [validationModalOpen, setValidationModalOpen] = useState<boolean>(false);
  const imageData: string = item.Photo.url;
  const dateData: string = item.updatedAt;
  const splitedData = imageData.split('/', 7);
  const splitedDate = dateData.split('T');
  const image: string = splitedData[6]; ///추출된 이미지 url
  const date: string = splitedDate[0]; ///추출된 날짜
  const year = date.split('-')[0];
  const month = date.split('-')[1];
  const day = date.split('-')[2];
  const showModal = () => {
    setModalOpen(!modalOpen);
  };
  const showValidationModal = () => {
    setValidationModalOpen(!validationModalOpen);
  };
  return (
    <div>
      {validationModalOpen && <ValidationModal showValidationModal={showValidationModal} cardId={item.id} />}
      <CardContainer>
        {modalOpen && (
          <Modal
            modalOpen={modalOpen}
            setModalOpen={setModalOpen}
            showModal={showModal}
            showValidationModal={showValidationModal}
            item={item}
            image={`http://localhost:3030/api/image/${image}`}
          />
        )}
        <HeaderContainer>
          <UserContainer>
            <UserWrap>
              <UserImage />
              <UserNickName>{item.User.username}</UserNickName>
            </UserWrap>

            <MoreBtn width={'25px'} height={'25px'} fill={buttonColor} onClick={showModal} cursor={'pointer'} />
          </UserContainer>
        </HeaderContainer>
        <CardImage image={image} />

        <ButtonContainer>
          <HeartCommentContainer>
            <HeartBtn width={'30px'} height={'30px'} fill={'#ffff'} stroke={buttonColor} cursor={'pointer'} />
            <CommentBtn width={'30px'} height={'30px'} fill={buttonColor} stroke={buttonColor} cursor={'pointer'} />
          </HeartCommentContainer>
          <BookMarkBtn width={'32px'} height={'32px'} fill={buttonColor} />
        </ButtonContainer>
        <HeartCount>좋아요 {item.like.length}개</HeartCount>
        <TextContainer>
          <UserNickName>{item.User.username}</UserNickName>
          <CardText>{item.description}</CardText>
        </TextContainer>
        <CommentCount>댓글 1개</CommentCount>
        <Date>
          {year}년 {month}월 {day}일
        </Date>
      </CardContainer>
    </div>
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
  position: relative;
`;

const HeaderContainer = styled.div`
  padding: 9px 18px 9px 9px;
  width: 100%;
  height: 55px;
  border-bottom: 1px solid #e8e8e8;
`;
const UserContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const UserWrap = styled.div`
  display: flex;
  align-items: center;
`;
const UserImage = styled.div`
  margin-right: 12px;
  width: 37px;
  height: 37px;
  border-radius: 20px;
  background-color: red;
  cursor: pointer;
`;
const UserNickName = styled.div`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 5px;
  cursor: pointer;
`;

const CardImage = styled.div<{ image: string }>`
  width: 100%;
  padding-bottom: 100%;
  background-image: url(http://localhost:3030/api/image/${props => props.image});
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

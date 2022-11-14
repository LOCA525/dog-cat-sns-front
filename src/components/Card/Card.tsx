import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { disLikeCardApi, getCardApi, likeCardApi } from '../../api/board';
import { ReactComponent as BookMarkBtn } from '../../assets/images/bookmark.svg';
import { ReactComponent as CommentBtn } from '../../assets/images/comment.svg';
import { ReactComponent as HeartBtn } from '../../assets/images/heart.svg';
import { ReactComponent as MoreBtn } from '../../assets/images/more.svg';
import noProfileImage from '../../assets/images/profile3.png';
import { cardUserId } from '../../store/cardUserId';
import { commentCard } from '../../store/commentCard';
import { loginUserId } from '../../store/loginUser';
import { modeState } from '../../store/themeColor';
import Modal from './Modal';
import ValidationModal from './ValidationModal';

function Card({ item }: any) {
  const userId = useRecoilValue(loginUserId);
  const { buttonColor } = useRecoilValue(modeState);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [validationModalOpen, setValidationModalOpen] = useState<boolean>(false);
  const [heartState, setHeartState] = useState<boolean>(false);
  const [cardClick, setCardClick] = useRecoilState(cardUserId);
  const [likeLength, setLikeLength] = useState('');
  const [isProfileImage, setIsProfileImage] = useState(false); //카드 유저의 프로필 이미지가 있는지 없는지 체크하는 스테이트
  const [commentCardState, setCommentCardState] = useRecoilState(commentCard);
  const navigate = useNavigate();

  // 카드 우측상단 more버튼 클릭시 뜨는 모달창
  const showModal = () => {
    setModalOpen(!modalOpen);
  };
  // 카드삭제 클릭시 확인창
  const showValidationModal = () => {
    setValidationModalOpen(!validationModalOpen);
  };
  //좋아요 버튼 클릭
  const handleHaertClick = async () => {
    const heartBody = {
      board_id: item.id,
      user_id: userId,
    };
    if (heartState === false) {
      try {
        const res = await likeCardApi(heartBody);
        if (res.status == 200) {
          const res = await likeCardApi(heartBody);
          console.log('좋아요 성공', res);
          setHeartState(true);
          getCard();
        }
      } catch (error) {
        console.log('좋아요에러', error);
      }
    } else {
      try {
        const res = await disLikeCardApi(heartBody);
        if (res.status == 200) {
          const res = await disLikeCardApi(heartBody);
          console.log('좋아요취소 성공', res);
          setHeartState(false);
          getCard();
        }
      } catch (error) {
        console.log('좋아요취소에러', error);
      }
    }
  };

  const getCard = async () => {
    try {
      const res = await getCardApi(item.id);
      if (res.status === 200) {
        const res = await getCardApi(item.id);
        //Card내 좋아요한 유저 리스트 중 내아이디값과 같은 상태인지 체크한후 좋아요 표시
        const likeList = res.data.like;
        setLikeLength(likeList.length);
        const isLike = likeList.some((item: { user_id: number }) => item.user_id === userId);
        setHeartState(isLike);
      }
    } catch (error) {
      console.log('카드조회실패', error);
    }
  };

  const navigateUserPage = () => {
    navigate(`/mypage/${item.User.username}`);
    setCardClick(item.User.id);
    //클릭시 현재 카드 item recoilState 담김.
    // 그 스테이트를 유저페이지 컴포넌트에서 뿌리기.
    //유저 아이디값 비교로 프로필편집버튼 or 팔로우버튼 둘중하나로 보이도록하기.
  };
  useEffect(() => {
    getCard();
    if (item.User.Profile === null) {
      setIsProfileImage(false);
    } else {
      setIsProfileImage(true);
    }
  }, []);

  const navigateCommentPage = () => {
    navigate('/comment');
    setCommentCardState({
      cardId: item.id,
      photo: item.User.Profile?.url,
      cardUserName: item.User.username,
      description: item.description,
      createDate: `${item.updatedAt.split('T')[0].split('-')[0]}년 ${item.updatedAt.split('T')[0].split('-')[1]}월 ${
        item.updatedAt.split('T')[0].split('-')[2]
      }일`,
    });
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
            image={`http://localhost:3030/api/image/${item.Photo.url}`}
          />
        )}
        <HeaderContainer>
          <UserContainer>
            <UserWrap>
              <UserImageContainer onClick={navigateUserPage}>
                <UserImage
                  src={isProfileImage ? `http://localhost:3030/api/image/${item.User.Profile.url}` : noProfileImage}
                />
              </UserImageContainer>

              <UserNickName onClick={navigateUserPage}>
                <span>{item.User.username}</span>
              </UserNickName>
            </UserWrap>

            <MoreBtn width={'25px'} height={'25px'} fill={buttonColor} onClick={showModal} cursor={'pointer'} />
          </UserContainer>
        </HeaderContainer>
        <CardImage image={item.Photo.url} />

        <ButtonContainer>
          <HeartCommentContainer>
            <HeartBtn
              onClick={handleHaertClick}
              width={'30px'}
              height={'30px'}
              fill={heartState ? 'red' : '#ffffff'}
              stroke={heartState ? 'red' : buttonColor}
              cursor={'pointer'}
            />
            <CommentBtn
              onClick={navigateCommentPage}
              width={'30px'}
              height={'30px'}
              fill={buttonColor}
              stroke={buttonColor}
              cursor={'pointer'}
            />
          </HeartCommentContainer>
          {/* <BookMarkBtn width={'32px'} height={'32px'} fill={buttonColor} /> */}
        </ButtonContainer>
        <HeartCount>좋아요 {likeLength}개</HeartCount>
        <TextContainer>
          <UserNickName>
            <span onClick={navigateUserPage}>{item.User.username}</span>
          </UserNickName>
          <CardText>{item.description}</CardText>
        </TextContainer>
        <CommentCount>
          <span onClick={navigateCommentPage}>댓글 {item.Reply?.length}개</span>
        </CommentCount>
        <Date>
          {item.updatedAt.split('T')[0].split('-')[0]}년 {item.updatedAt.split('T')[0].split('-')[1]}월{' '}
          {item.updatedAt.split('T')[0].split('-')[2]}일
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
const UserImageContainer = styled.div`
  width: 37px;
  height: 37px;
  border-radius: 50px;
  margin-right: 12px;
`;
const UserImage = styled.img`
  border-radius: 50px;
  width: 100%;
  height: 100%;
  cursor: pointer;
`;
const UserNickName = styled.div`
  font-size: 14px;
  font-weight: 900;
  margin-bottom: 5px;
  span {
    cursor: pointer;
  }
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
  span {
    cursor: pointer;
  }
`;
const TextContainer = styled.div`
  font-weight: 400;
  font-size: 14px;
  padding: 0 20px 8px 20px;
`;
const CardText = styled.div`
  font-weight: bold;
`;
const Date = styled.div`
  font-size: 10px;
  color: #8e8e8e;
  padding-right: 20px;
  text-align: right;
`;

export default Card;

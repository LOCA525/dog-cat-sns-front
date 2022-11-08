import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { getCommentApi } from '../api/board';
import noProfileImage from '../assets/images/profile3.png';
import CommentCard from '../components/CommentCard/CommentCard';
import UserHeader from '../components/UserHeader';
import { commentCard } from '../store/commentCard';

function CommentPage() {
  const cardUserData = useRecoilValue<any>(commentCard);
  const [isProfileImage, setIsProfileImage] = useState(false);
  console.log(cardUserData);
  const [commentData, setCommentData] = useState<any>([]);

  const getComment = async () => {
    try {
      const res = await getCommentApi(cardUserData.cardId);
      if (res.status === 200) {
        const res = await getCommentApi(cardUserData.cardId);
        console.log('댓글조회성공', res);
        setCommentData(res.data);
      }
    } catch (error) {
      console.log('댓글조회에러', error);
    }
  };

  useEffect(() => {
    if (cardUserData.photo === undefined) {
      setIsProfileImage(false);
    } else {
      setIsProfileImage(true);
    }
    getComment();
  }, []);

  return (
    <div>
      <UserHeader headerTitle="댓글" />
      <CommentContainer>
        <CardUserContainer>
          <UserImageContainer>
            <UserImage
              src={isProfileImage ? `http://localhost:3030/api/image/${cardUserData.photo}` : noProfileImage}
            />
          </UserImageContainer>
          <ContentContainer>
            <UserName>{cardUserData.cardUserName}</UserName>
            <CardContent>{cardUserData.description}</CardContent>
            <CreateDate>{cardUserData.createDate}</CreateDate>
          </ContentContainer>
        </CardUserContainer>
        {commentData?.map((item: any) => {
          return <CommentCard key={item.id} item={item} />;
        })}
      </CommentContainer>
    </div>
  );
}

const CommentContainer = styled.div`
  overflow-y: auto;
  width: 100%;
  max-width: 500px;
  display: flex;
  height: calc(100vh - 110px);
  flex-direction: column;
`;
const CardUserContainer = styled.div`
  width: 100%;
  border-top: 1px solid rgb(223, 227, 232);
  border-bottom: 1px solid rgb(223, 227, 232);
  padding: 15px;
  display: flex;
`;
const UserImageContainer = styled.div`
  width: 37px;
  height: 37px;
  min-width: 37px;
  border-radius: 50px;
  margin-right: 15px;
`;
const UserImage = styled.img`
  border-radius: 50px;
  width: 100%;
  height: 100%;
`;

const ContentContainer = styled.div`
  float: left;
`;

const UserName = styled.div`
  font-size: 14px;
  font-weight: 900;
`;
const CardContent = styled.div`
  font-size: 14px;
  font-weight: 600;
`;
const CreateDate = styled.div`
  font-size: 10px;
  color: #8e8e8e;
  margin-top: 10px;
  text-align: left;
`;

export default CommentPage;

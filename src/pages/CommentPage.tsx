import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { getCommentApi, postCommentApi } from '../api/board';
import noProfileImage from '../assets/images/profile3.png';
import CommentCard from '../components/CommentCard/CommentCard';
import Loading from '../components/Loading/Loading';
import UserHeader from '../components/UserHeader';
import { commentCard } from '../store/commentCard';
import { loginUserId, loginUserProfileUrl } from '../store/loginUser';
import { modeState } from '../store/themeColor';

function CommentPage() {
  const cardUserData = useRecoilValue<any>(commentCard);
  const [isProfileImage, setIsProfileImage] = useState(false);
  const commentUserImageUrl = useRecoilValue(loginUserProfileUrl);
  const [commentData, setCommentData] = useState<any>([]);
  const { buttonColor, hoverColor } = useRecoilValue(modeState);
  const [commentContent, setCommentContent] = useState('');
  const userId = useRecoilValue(loginUserId);
  const [isLoading, setIsLoading] = useState(true);

  const getComment = async () => {
    setIsLoading(true);
    try {
      const res = await getCommentApi(cardUserData.cardId);
      if (res.status === 200) {
        const res = await getCommentApi(cardUserData.cardId);
        setCommentData(res.data);
        setIsLoading(false);
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

  const commentUploadSubmit = async (e: any) => {
    e.preventDefault();
    if (commentContent !== '') {
      const commentBody = {
        content: commentContent,
        writer: userId,
      };
      try {
        const res = await postCommentApi(cardUserData.cardId, commentBody);
        if (res.status === 200) {
          getComment();
          setCommentContent('');
        }
      } catch (error) {
        console.log('error', error);
      }
    } else {
      alert('한글자 이상 입력해주세요!');
    }
  };
  return (
    <div>
      <UserHeader headerTitle="댓글" />
      {isLoading && <Loading />}
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
        <CommentFormContainer onSubmit={commentUploadSubmit}>
          <CommentUserImageContainer>
            <CommentUserImage src={commentUserImageUrl} />
          </CommentUserImageContainer>
          <CommentForm typeof="submit">
            <CommentInput
              placeholder="댓글 달기..."
              onChange={(e: any) => {
                setCommentContent(e.target.value);
              }}
              value={commentContent}
            ></CommentInput>
            <UoloadBtn onClick={commentUploadSubmit} buttonColor={buttonColor} hoverColor={hoverColor}>
              게시
            </UoloadBtn>
          </CommentForm>
        </CommentFormContainer>
        {commentData?.map((item: any) => {
          return <CommentCard key={item.id} item={item} userId={userId} getComment={getComment} />;
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
  padding-top: 60px;
  height: 100vh;
  flex-direction: column;
`;
const CommentUserImageContainer = styled.div`
  width: 37px;
  height: 37px;
  min-width: 37px;
  border-radius: 50px;
  margin-right: 15px;
`;
const CommentUserImage = styled.img`
  border-radius: 50px;
  width: 100%;
  height: 100%;
`;
const CommentFormContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  padding: 6px 15px 6px 15px;
  border-bottom: 1px solid rgb(223, 227, 232);
`;
const CommentForm = styled.form`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const CommentInput = styled.input`
  width: 100%;
  padding: 0 20px 0 0;
`;
const UoloadBtn = styled.button<{ buttonColor: string; hoverColor: string }>`
  width: 70px;
  height: 40px;
  font-weight: 900;
  border-radius: 10px;
  color: #ffff;
  background-color: ${props => props.buttonColor};
  :hover {
    background-color: ${props => props.hoverColor};
  }
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

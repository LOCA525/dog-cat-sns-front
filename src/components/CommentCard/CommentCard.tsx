import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { deleteCommentApi } from '../../api/board';
import noProfileImage from '../../assets/images/profile3.png';
import { modeState } from '../../store/themeColor';

function CommentCard({ item, userId, getComment }: any) {
  const [isProfileImage, setIsProfileImage] = useState(false);
  const { buttonColor, hoverColor } = useRecoilValue(modeState);

  const deleteCommentClick = async () => {
    try {
      const res = await deleteCommentApi(item.id);
      if (res.status === 200) {
        const res = await deleteCommentApi(item.id);
        console.log('삭제성공', res);
        getComment();
      }
    } catch (error) {
      console.log(error);
    }
  };
  console.log('item', item);

  useEffect(() => {
    if (item.User.Profile === null) {
      setIsProfileImage(false);
    } else {
      setIsProfileImage(true);
    }
  });

  return (
    <div>
      <CommentCardContainer>
        <CardUserContainer>
          <UserImageContainer>
            <UserImage
              src={isProfileImage ? `http://43.201.89.17:3030/api/image/${item.User.Profile.url}` : noProfileImage}
            />
          </UserImageContainer>
          <ContentContainer>
            <UserName>{item.User.username}</UserName>
            <CardContent>{item.content}</CardContent>
            <CreateDate>
              {item.createdAt.split('T')[0].split('-')[0]}년 {item.createdAt.split('T')[0].split('-')[1]}월{' '}
              {item.createdAt.split('T')[0].split('-')[2]}일
            </CreateDate>
          </ContentContainer>
        </CardUserContainer>
        {userId === item.writer && (
          <DeleteBtnContainer onClick={deleteCommentClick} buttonColor={buttonColor} hoverColor={hoverColor}>
            <DeleteBtn>X</DeleteBtn>
          </DeleteBtnContainer>
        )}
      </CommentCardContainer>
    </div>
  );
}
const CommentCardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const CardUserContainer = styled.div`
  width: 100%;
  padding: 15px 50px 15px 15px;
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
  cursor: pointer;
`;

const ContentContainer = styled.div`
  float: left;
`;

const UserName = styled.span`
  font-size: 14px;
  font-weight: 900;
  margin-right: 5px;
  cursor: pointer;
`;
const CardContent = styled.span`
  font-size: 14px;
  font-weight: 600;
`;
const CreateDate = styled.div`
  font-size: 10px;
  color: #8e8e8e;
  margin-top: 10px;
  text-align: left;
`;

const DeleteBtnContainer = styled.div<{ buttonColor: string; hoverColor: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15px;
  height: 15px;
  background-color: ${props => props.buttonColor};
  margin-right: 20px;
  border-radius: 5px;
  cursor: pointer;
  :hover {
    background-color: ${props => props.hoverColor};
  }
`;
const DeleteBtn = styled.div`
  font-size: 10px;
  font-weight: 900;
  color: #ffff;
`;
export default CommentCard;

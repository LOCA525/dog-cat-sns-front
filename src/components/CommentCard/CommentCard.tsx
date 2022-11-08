import { useState } from 'react';
import styled from 'styled-components';
import noProfileImage from '../../assets/images/profile3.png';

function CommentCard({ item }: any) {
  const [isProfileImage, setIsProfileImage] = useState(false);
  return (
    <div>
      <CardUserContainer>
        <UserImageContainer>
          <UserImage src={noProfileImage} />
          {/* <UserImage src={isProfileImage ? `http://localhost:3030/api/image/${cardUserData.photo}` : noProfileImage} /> */}
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
    </div>
  );
}

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

export default CommentCard;

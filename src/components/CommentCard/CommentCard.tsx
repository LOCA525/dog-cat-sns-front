import { useState } from 'react';
import styled from 'styled-components';
import noProfileImage from '../../assets/images/profile3.png';

function CommentCard() {
  const [isProfileImage, setIsProfileImage] = useState(false);

  return (
    <div>
      <CardUserContainer>
        <UserImageContainer>
          <UserImage />
          {/* <UserImage src={isProfileImage ? `http://localhost:3030/api/image/${cardUserData.photo}` : noProfileImage} /> */}
        </UserImageContainer>
        <ContentContainer>
          <UserName>Jessica</UserName>
          <CardContent>오우쒯안뇽하세요</CardContent>
          <CreateDate>2012년12월31일</CreateDate>
        </ContentContainer>
      </CardUserContainer>
    </div>
  );
}

const CardUserContainer = styled.div`
  width: 100%;
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

export default CommentCard;

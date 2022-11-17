import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import noProfileImage from '../../assets/images/profile3.png';
import { cardUserId } from '../../store/cardUserId';

function UserCard({ item }: any) {
  const [userId, setUserId] = useRecoilState(cardUserId);
  const navigate = useNavigate();

  const navigateClick = () => {
    setUserId(item.id);
    navigate(`/myPage/${item.username}`);
  };
  return (
    <Container>
      <UserImageContainer>
        <UserImage
          onClick={navigateClick}
          src={item.Profile === null ? noProfileImage : `http://localhost:3030/api/image/${item.Profile?.url}`}
        />
      </UserImageContainer>
      <UserContentContainer>
        <UserName onClick={navigateClick}>{item.username}</UserName>
      </UserContentContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
`;

const UserImageContainer = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 100px;
  margin-right: 20px;
  cursor: pointer;
`;

const UserImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 100px;
`;

const UserContentContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const UserName = styled.div`
  font-weight: 700;
  margin-right: 10px;
  cursor: pointer;
`;

export default UserCard;

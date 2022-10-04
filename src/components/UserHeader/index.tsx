import styled from 'styled-components';
import backIcon from '../../assets/images/back.png';

function UserHeader() {
  return (
    <Container>
      <BackBtn src={backIcon} />
      <UserNickName>HELLOLOCA</UserNickName>
      <EmptyBtn />
    </Container>
  );
}

export default UserHeader;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  width: 100%;
  padding: 0 10px 0 10px;
`;

const BackBtn = styled.img`
  width: 45px;
  height: 45px;
  cursor: pointer;
`;

const UserNickName = styled.div`
  font-size: 20px;
  font-weight: bold;
`;
const EmptyBtn = styled.div`
  width: 45px;
  height: 45px;
`;

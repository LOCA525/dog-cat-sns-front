import styled from 'styled-components';
import BottomNav from '../components/BottomNav';
import UserFeeds from '../components/UserFeeds';
import UserHeader from '../components/UserHeader';
import UserProfile from '../components/UserProfile';

function MyPage() {
  return (
    <div>
      <UserHeader headerTitle={'유저닉네임'} />
      <Container>
        <UserProfile />
        <UserFeeds />
      </Container>
      <BottomNav />
    </div>
  );
}

export default MyPage;

const Container = styled.div`
  height: calc(100vh - 110px);
  overflow-y: auto;
`;

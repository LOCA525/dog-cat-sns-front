import styled from 'styled-components';
import PasswordChangeForm from '../components/Account/PasswordChangeForm';
import BottomNav from '../components/BottomNav/BottomNav';
import UserHeader from '../components/UserHeader';

function PasswordChangePage() {
  return (
    <div>
      <UserHeader headerTitle="비밀번호 변경" />
      <Container>
        <PasswordChangeForm />
        <BottomNav />
      </Container>
    </div>
  );
}

const Container = styled.div`
  padding-top: 60px;
`;

export default PasswordChangePage;

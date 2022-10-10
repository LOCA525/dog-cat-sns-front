import styled from 'styled-components';
import LoginForm from '../components/Account/LoginForm';
import LoginNavigation from '../components/Account/LoginNavigation';
import TitleLogo from '../components/TitleLogo';

function LoginPage() {
  return (
    <Container>
      <TitleLogo style={{ margin: '4rem' }} />
      <LoginForm />
      <LoginNavigation />
    </Container>
  );
}

export default LoginPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 7rem;
`;

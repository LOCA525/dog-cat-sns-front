import styled from 'styled-components';
import LinkBtn from './LinkBtn';

function LoginNavigation() {
  return (
    <Container>
      <LinkBtn to="/join">회원가입</LinkBtn>
    </Container>
  );
}

export default LoginNavigation;

const Container = styled.div`
  display: flex;
  gap: 0.5rem;
`;

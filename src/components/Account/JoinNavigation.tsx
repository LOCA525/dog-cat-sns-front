import styled from 'styled-components';
import LinkBtn from './LinkBtn';

function JoinNavigation() {
  return (
    <Container>
      <Guide>계정이 있으신가요?</Guide>
      <LinkBtn to="/login">로그인</LinkBtn>
    </Container>
  );
}

export default JoinNavigation;

const Container = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const Guide = styled.label`
  font-size: 0.9rem;
`;

import styled from 'styled-components';

interface AlertProps {
  message: string;
}

function Alert({ message }: AlertProps) {
  return (
    <Container>
      <Background>
        <Message>{message}</Message>
      </Background>
    </Container>
  );
}

export default Alert;

const Container = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  left: 2rem;
  right: 2rem;
  top: 5rem;
  z-index: 10;
`;

const Background = styled.div`
  padding: 0.5rem 1rem 0.5rem 1rem;
  min-height: 2rem;
  border-radius: 0.5rem;
  background-color: #ff7f00;
`;

const Message = styled.label`
  font-size: 0.9rem;
  font-weight: 400;
  color: white;
  white-space: pre;
`;

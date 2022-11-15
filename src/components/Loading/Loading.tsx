import Lottie from 'lottie-react';
import styled from 'styled-components';
import animateCat from '../Loading/116545-loading-cat.json';

function Loading() {
  return (
    <Container>
      <AnimateCat>
        <Lottie animationData={animateCat} />
      </AnimateCat>
    </Container>
  );
}

const Container = styled.div`
  max-width: 500px;
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 120px;
`;

const AnimateCat = styled.div`
  width: 80px;
  height: 80px;
`;
export default Loading;

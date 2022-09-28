import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../styles/colors';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 500px;
  min-width: 320px;
  max-width: 500px;
  background-color: white;
`;

function MainContent() {
  return (
    <Container>
      <h1>메인</h1>
    </Container>
  );
}

export default MainContent;

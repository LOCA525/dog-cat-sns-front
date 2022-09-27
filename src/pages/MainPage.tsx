import React from 'react';
import styled from 'styled-components';
import Logo from '../components/Logo';
import MainContent from '../components/MainContent';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

function MainPage() {
  return (
    <Container>
      <Logo />
      <MainContent />
    </Container>
  );
}

export default MainPage;

import React from 'react';
import styled from 'styled-components';
import './App.css';
import Logo from './components/Logo';
import MainContent from './components/MainContent';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

function App() {
  return (
    <div>
      <Container>
        <Logo />
        <MainContent />
      </Container>
    </div>
  );
}

export default App;

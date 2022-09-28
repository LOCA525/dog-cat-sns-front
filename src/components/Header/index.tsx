import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 60px;
  width: 100%;
`;

function Header() {
  return (
    <div>
      <Container>
        <div>헤더</div>
      </Container>
    </div>
  );
}

export default Header;

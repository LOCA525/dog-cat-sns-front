import React from 'react';
import styled from 'styled-components';
import Card from '../Card';

const BoardContainer = styled.div`
  overflow-y: auto;
  padding: 0 15px 0 15px;
  width: 100%;
  height: calc(100vh - 110px);
  background-color: #f5f6f7;
`;

function Board() {
  return (
    <BoardContainer>
      <Card />
      <Card />
    </BoardContainer>
  );
}

export default Board;

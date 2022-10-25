import { useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { cardFilterState, filteredCardState } from '../../store/cardState';
// import { cardState, catCards, dogCards } from '../../store/cardState';
import { modeState } from '../../store/themeColor';
import Card from '../Card/Card';

function Board() {
  // const currentCard = useRecoilValue<any>(cardState);
  // const dogCard = useRecoilValue(dogCards);
  // const catCard = useRecoilValue(catCards);
  // if (Theme.mode === 'orange') {
  //   setCurrentCard(dogCard);
  // } else {
  //   setCurrentCard(catCard);
  // }
  const currentCard = useRecoilValue<any>(filteredCardState);

  return (
    <BoardContainer className="boardContainer">
      {currentCard
        .slice(0) ///원본배열 변경하지않고 역순으로 map
        .reverse()
        .map((item: any) => {
          return <Card item={item} key={item.id} />;
        })}
    </BoardContainer>
  );
}

const BoardContainer = styled.div`
  overflow-y: auto;
  padding: 0 15px 0 15px;
  width: 100%;
  height: calc(100vh - 110px);
  background-color: #f5f6f7;
  position: relative;
`;

export default Board;

import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { cardState } from '../../store/cardState';
import Card from '../Card';

function Board() {
  const currentCard = useRecoilValue(cardState);
  return (
    <BoardContainer className="boardContainer">
      {currentCard
        ?.slice(0) ///원본배열 변경하지않고 역순으로 map
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
`;

export default Board;

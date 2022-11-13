import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import noFollowImage from '../../assets/images/noFollowing.png';
import { followCardState } from '../../store/cardState';
import Card from '../Card/Card';
function Board() {
  const currentCard = useRecoilValue<any>(followCardState);
  const [isNoFollowing, setIsNoFollowing] = useState<boolean>(false);

  useEffect(() => {
    if (currentCard.length === 0) {
      setIsNoFollowing(true);
    } else {
      setIsNoFollowing(false);
    }
  }, [currentCard]); //최적화 필요할듯

  return (
    <BoardContainer className="boardContainer">
      {isNoFollowing ? (
        <ImageContainer>
          <NoFollowingImage src={noFollowImage} />
        </ImageContainer>
      ) : (
        <div>
          {currentCard
            .slice(0) ///원본배열 변경하지않고 역순으로 map
            .reverse()
            .map((item: any) => {
              return <Card item={item} key={item.id} />;
            })}
        </div>
      )}
    </BoardContainer>
  );
}

const BoardContainer = styled.div`
  overflow-y: auto;
  padding: 0 15px 15px 15px;
  width: 100%;
  height: calc(100vh - 120px);
  background-color: #f5f6f7;
  position: relative;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NoFollowingImage = styled.img`
  max-width: 300px;
  width: 100%;
  max-height: 400px;
  height: 100%;
`;

export default Board;

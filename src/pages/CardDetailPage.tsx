import { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { getCardApi } from '../api/board';
import Card from '../components/Card/Card';
import UserHeader from '../components/UserHeader';
import { followCardState } from '../store/cardState';
import { detailCardId, detailCardUserName } from '../store/detailCardId';

function CardDetailPage() {
  const detailCard = useRecoilValue(detailCardId);
  const [card, setCard] = useState(null);
  const userName = useRecoilValue(detailCardUserName);
  const getCard = async () => {
    try {
      const res = await getCardApi(detailCard);
      if (res.status === 200) {
        const res = await getCardApi(detailCard);
        console.log('카드조회성공', res);
        setCard(res.data);
      }
    } catch (error) {
      console.log('카드조회에러', error);
    }
  };
  useEffect(() => {
    getCard();
  }, []);

  return (
    <div>
      <UserHeader headerTitle={`${userName} 의 게시글`} />
      <CardDetailContainer>{card && <Card item={card} />}</CardDetailContainer>
    </div>
  );
}

const CardDetailContainer = styled.div`
  overflow-y: auto;
  padding: 0 15px 0 15px;
  width: 100%;
  height: calc(100vh - 60px);
  background-color: #f5f6f7;
`;

export default CardDetailPage;

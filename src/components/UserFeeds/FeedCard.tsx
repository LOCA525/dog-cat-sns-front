import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { detailCardId } from '../../store/detailCardId';

function FeedCard({ item }: any) {
  console.log(item);

  const navigate = useNavigate();
  const [, setDetailCardId] = useRecoilState(detailCardId);
  return (
    <Card
      onClick={() => {
        navigate(`/cardDetail/${item.id}`);
        setDetailCardId(item.id);
      }}
      url={item.Photo.url}
    />
  );
}

const Card = styled.div<{ url: string }>`
  width: 100%;
  height: 100%;
  background-color: #000;
  background-image: url(http://localhost:3030/api/image/${props => props.url});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  padding-bottom: 100%;
  border: 1px solid #ffff;
  cursor: pointer;
`;

export default FeedCard;

import { useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { ReactComponent as HomeBtn } from '../../assets/images/home.svg';
import { ReactComponent as SearchFeedBtn } from '../../assets/images/searchFeed.svg';
import { ReactComponent as UploadBtn } from '../../assets/images/upload.svg';
import { cardFollowState } from '../../store/cardState';
import { modeState } from '../../store/themeColor';

const Container = styled.div`
  position: fixed;
  z-index: 99;
  background-color: #fff;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  max-width: 500px;
  width: 100%;
  height: 50px;
  border-top: 1px solid rgb(223, 227, 232);
`;
function BottomNav() {
  const { buttonColor } = useRecoilValue(modeState);
  const [isfollowPage, setIsFollowPage] = useRecoilState(cardFollowState);
  const navigate = useNavigate();

  return (
    <Container>
      <SearchFeedBtn
        width={'32px'}
        height={'32px'}
        stroke={buttonColor}
        cursor={'pointer'}
        onClick={() => {
          navigate('/');
          setIsFollowPage('all');
          document.querySelector('.boardContainer')?.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        }}
      />
      <UploadBtn
        width={'33px'}
        height={'33px'}
        fill={buttonColor}
        onClick={() => {
          navigate('/upload');
        }}
        cursor={'pointer'}
      />
      <HomeBtn
        width={'27px'}
        height={'26px'}
        fill={buttonColor}
        cursor={'pointer'}
        onClick={() => {
          navigate('/');
          setIsFollowPage('follow');
          document.querySelector('.boardContainer')?.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        }}
      />
    </Container>
  );
}

export default BottomNav;

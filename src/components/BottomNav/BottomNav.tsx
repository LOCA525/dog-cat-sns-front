import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { ReactComponent as HomeBtn } from '../../assets/images/home.svg';
import { ReactComponent as SearchFeedBtn } from '../../assets/images/searchFeed.svg';
import { ReactComponent as UploadBtn } from '../../assets/images/upload.svg';
import { bottomNavState } from '../../store/bottomNavState';
import { cardFollowState } from '../../store/cardState';
import { modeState } from '../../store/themeColor';

const Container = styled.div`
  padding-bottom: 10px;
  position: fixed;
  z-index: 99;
  background-color: #fff;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  max-width: 500px;
  width: 100%;
  height: 60px;
  border-top: 1px solid rgb(223, 227, 232);
`;
function BottomNav() {
  const { buttonColor } = useRecoilValue(modeState);
  const [isFollowPage, setIsFollowPage] = useRecoilState(cardFollowState);
  const [isFollow, setIsFollow] = useRecoilState(bottomNavState);
  const navigate = useNavigate();

  return (
    <Container>
      <SearchFeedBtn
        width={'32px'}
        height={'32px'}
        stroke={buttonColor}
        fill={isFollow ? 'none' : buttonColor}
        cursor={'pointer'}
        onClick={() => {
          setIsFollow(false);
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
        fill={isFollow ? buttonColor : '#ffffff'}
        stroke={buttonColor}
        cursor={'pointer'}
        onClick={() => {
          setIsFollow(true);
          navigate('/');
          setIsFollowPage('follow');
          document.querySelector('.boardContainer')?.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        }}
      />
    </Container>
  );
}

export default BottomNav;

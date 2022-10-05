import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { ReactComponent as HomeBtn } from '../../assets/images/home.svg';
import { ReactComponent as SearchFeedBtn } from '../../assets/images/searchFeed.svg';
import { ReactComponent as UploadBtn } from '../../assets/images/upload.svg';
import { themeColor } from '../../store/themeColor';

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
  const [themeState, setThemeColor] = useRecoilState(themeColor);
  return (
    <Container>
      <SearchFeedBtn width={'30px'} height={'30px'} stroke={themeState} />
      <UploadBtn width={'33px'} height={'33px'} fill={themeState} />
      <HomeBtn width={'25px'} height={'25px'} fill={themeState} />
    </Container>
  );
}

export default BottomNav;

import styled from 'styled-components';
import HomeBtn from '../common/HomeBtn';
import SearchFeedBtn from '../common/SearchFeedBtn';
import UploadBtn from '../common/UploadBtn';

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
  return (
    <Container>
      <SearchFeedBtn />
      <UploadBtn />
      <HomeBtn />
    </Container>
  );
}

export default BottomNav;

import styled from 'styled-components';
import noFeedImage from '../../assets/images/nofeed.png';
import FeedCard from './FeedCard';

function UserFeeds({ userData }: any) {
  const boardList = userData.BoardList;
  console.log(boardList);

  // const urlList = boardList?.map((item: any) => {
  //   const image = item.Photo.url;
  //   return image;
  // }); //부모컴포넌트에서 api 통신으로 받아온 url을 split하여 미리보기url 주소로 바꾸기 위해 쪼갬
  return (
    <UserFeedContainer>
      {boardList?.length === 0 ? (
        <img src={noFeedImage} />
      ) : (
        <Container>
          {boardList
            ?.slice(0)
            .reverse()
            .map((item: any) => {
              return <FeedCard key={item.id} item={item} />;
            })}
        </Container>
      )}
    </UserFeedContainer>
  );
}

const UserFeedContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30%, auto));
`;

export default UserFeeds;

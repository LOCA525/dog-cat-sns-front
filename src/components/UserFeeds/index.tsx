import styled from 'styled-components';
function UserFeeds({ userData }: any) {
  const boardList = userData.BoardList;

  const urlList = boardList?.map((item: any) => {
    const image = item.Photo.url;
    return image;
  }); //부모컴포넌트에서 api 통신으로 받아온 url을 split하여 미리보기url 주소로 바꾸기 위해 쪼갬

  return (
    <div>
      <Container>
        {urlList
          ?.slice(0)
          .reverse()
          .map((item: any) => {
            return <Card key={item} item={item} />;
          })}
      </Container>
    </div>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30%, auto));
`;

const Card = styled.div<{ item: string }>`
  width: 100%;
  height: 100%;
  background-color: #000;
  background-image: url(http://localhost:3030/api/image/${props => props.item});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  padding-bottom: 100%;
  border: 1px solid #ffff;
`;
export default UserFeeds;

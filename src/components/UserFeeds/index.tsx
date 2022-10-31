import styled from 'styled-components';
import exampleDogImage from '../../assets/images/example.png';
function UserFeeds() {
  return (
    <div>
      <Container>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
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

const Card = styled.div`
  width: 100%;
  height: 100%;
  background-color: #000;
  background-image: url(${exampleDogImage});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  padding-bottom: 100%;
  border: 1px solid #ffff;
`;
export default UserFeeds;

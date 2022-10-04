import styled from 'styled-components';
import exampleImage from '../assets/images/example.png';
import UserHeader from '../components/UserHeader';

function UploadPage() {
  return (
    <div>
      <UserHeader />
      <Container>
        <UploadContainer>
          <Image />
          <Content>
            <ContentInput></ContentInput>
          </Content>
          <UploadBtn>공유</UploadBtn>
        </UploadContainer>
      </Container>
    </div>
  );
}
const Container = styled.div`
  width: 100%;
  height: calc(100vh - 60px);
  overflow-y: auto;
  background-color: #f5f6f7;
`;
const UploadContainer = styled.div`
  padding: 12px;
  display: flex;
  flex-direction: column;
  width: 100%;
  border-top: 1px solid rgb(223, 227, 232);
`;

///생성시 이미지 들어가는곳
const Image = styled.div`
  width: 100%;
  padding-bottom: 100%;
  background-color: #000;
  background-image: url(${exampleImage});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
`;

const Content = styled.div``;
const ContentInput = styled.input`
  display: block;
  border: 1px solid rgb(223, 227, 232);
  width: 100%;
  padding-bottom: 20%;
`;
const UploadBtn = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  background-color: #ff7f00;
  color: #fff;
  border-radius: 10px;
  font-weight: bold;
`;

export default UploadPage;

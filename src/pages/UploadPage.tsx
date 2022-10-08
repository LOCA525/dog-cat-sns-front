import { ChangeEvent, useMemo, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';
import exampleImage from '../assets/images/example.png';
import UserHeader from '../components/UserHeader';
import { modeState } from '../store/themeColor';

function UploadPage() {
  const { buttonColor } = useRecoilValue(modeState);
  const [introduce, setIntroduce] = useState<string>('');

  const textAreaHeight = useMemo(() => {
    const paddingBottom = 8; // 0.5rem (8px)
    const lineHeight = 24; // line-height: 1rem (24px)
    const lines = introduce.split('\n').length;
    return `${lines * lineHeight + paddingBottom}px`;
  }, [introduce]);

  const handleChangeIntroduce = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setIntroduce(event.currentTarget.value);
  };
  return (
    <div>
      <UserHeader />
      <Container>
        <UploadContainer>
          <Image />
          <Content>
            <TextArea
              value={introduce}
              style={{ height: textAreaHeight }}
              onChange={handleChangeIntroduce}
              placeholder="사진에 대해 입력하세요"
            />
          </Content>
          <UploadBtn color={buttonColor}>공유</UploadBtn>
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

const Content = styled.div`
  display: flex;
`;

const TextArea = styled.textarea`
  margin-top: 10px;
  padding: 10px;
  width: 100%;
  min-height: 50px;
  border: none;
  outline: none;
  resize: none;
  overflow-y: hidden;
  border-bottom: 2px solid gainsboro;

  ::placeholder {
    color: gray;
  }
`;
const UploadBtn = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  background-color: ${props => props.color};
  color: #fff;
  border-radius: 10px;
  font-weight: bold;
`;

export default UploadPage;

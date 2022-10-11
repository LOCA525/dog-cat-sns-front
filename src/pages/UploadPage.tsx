import { ChangeEvent, useMemo, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';
import catBtn from '../assets/images/catBtn.png';
import dogBtn from '../assets/images/dogBtn.png';
import exampleImage from '../assets/images/uploadExample.png';
import UserHeader from '../components/UserHeader';
import { modeState } from '../store/themeColor';

function UploadPage() {
  const [toggleDogCat, setToggleDogCat] = useState(true);
  const { buttonColor, hoverColor } = useRecoilValue(modeState);
  const [upLoadImage, setUploadImage] = useState(exampleImage);
  const [introduce, setIntroduce] = useState<string>('');

  // const handleFileChange = (e: any) => {
  //   const reader = new FileReader();
  //   const fileURLs = reader.readAsDataURL(e.target.files[0]);
  //   reader.onload = () => {
  //     fileURLs[0] = reader.result;
  //     setUploadImage(fileURLs);
  //   };
  // };
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
          <UploadForm>
            <FileInput
              type="file"
              id="uploadInput"
              accept="image/jpg, image/png, image/jpeg"
              // onChange={handleFileChange}
            />

            <ShowImage upLoadImage={upLoadImage}></ShowImage>
            <ToggleBtnContainer>
              <BtnContainer>
                <ToggleBtn
                  onClick={() => {
                    setToggleDogCat(!toggleDogCat);
                  }}
                >
                  {toggleDogCat ? (
                    <DogBtn src={dogBtn} />
                  ) : (
                    <CatBtn src={catBtn} />
                  )}
                </ToggleBtn>
                관련 게시글 입니다.
              </BtnContainer>

              <Label htmlFor="uploadInput">
                <FileBtn color={buttonColor} hover={hoverColor}>
                  파일 선택
                </FileBtn>
              </Label>
            </ToggleBtnContainer>
            <Content>
              <TextArea
                value={introduce}
                style={{ height: textAreaHeight }}
                onChange={handleChangeIntroduce}
                placeholder="사진에 대해 입력하세요"
              />
            </Content>
            <UploadBtn typeof="submit" color={buttonColor} hover={hoverColor}>
              공유
            </UploadBtn>
          </UploadForm>
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
  font-size: 15px;
  font-weight: bold;
`;
const Label = styled.label``;
const FileBtn = styled.div<{ hover: string }>`
  width: 80px;
  background-color: ${props => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 32px;
  color: #ffff;
  border-radius: 5px;
  cursor: pointer;
  :hover {
    background-color: ${props => props.hover};
  }
`;
const UploadForm = styled.form``;
const FileInput = styled.input`
  display: none;
`;
///생성시 이미지 들어가는곳
const ToggleBtn = styled.div``;
const ShowImage = styled.div<{ upLoadImage: any }>`
  width: 100%;
  padding-bottom: 100%;
  background-color: #000000;
  background-image: url(${props => props.upLoadImage});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  border-bottom: 1px solid gainsboro;
`;
const ToggleBtnContainer = styled.div`
  position: relative;
  background-color: #ffff;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid gainsboro;
`;
const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: grey;
`;
const CatBtn = styled.img`
  width: 100px;
  margin-right: 10px;
`;
const DogBtn = styled.img`
  width: 100px;
  margin-right: 10px;
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
  border-bottom: 1px solid gainsboro;

  ::placeholder {
    color: gray;
  }
`;
const UploadBtn = styled.div<{ hover: string }>`
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
  cursor: pointer;

  :hover {
    background-color: ${props => props.hover};
  }
`;

export default UploadPage;

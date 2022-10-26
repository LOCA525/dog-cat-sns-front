import React, { ChangeEvent, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { photoApi, upLoadApi } from '../../api/board';
import catBtn from '../../assets/images/catBtn.png';
import dogBtn from '../../assets/images/dogBtn.png';
import exampleImage from '../../assets/images/uploadExample.png';
import { editCardImage, editCardItem } from '../../store/editCardItem';
import { loginUserId } from '../../store/loginUser';
import { modeState } from '../../store/themeColor';
import UserHeader from '../UserHeader';

function UploadEditUi({ isEdit }: any) {
  const editCardData = useRecoilValue(editCardItem); //store에 저장된 수정할 카드의 데이터
  const editImage = useRecoilValue(editCardImage); //store에 저장된 수정할 카드의 미리보기이미지 url
  const [isDog, setIsDog] = useState<boolean>(true);
  const [isCat, setIsCat] = useState<boolean>(false);
  const { buttonColor, hoverColor } = useRecoilValue(modeState);
  const [upLoadImage, setUploadImage] = useState(exampleImage);
  const [introduce, setIntroduce] = useState<string>(isEdit ? 'd' : '');
  console.log(editCardData.id);

  const [imageFile, setImageFile] = useState<any>(null);
  const id = useRecoilValue(loginUserId);
  const navigate = useNavigate();

  const handleUploadSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (introduce !== '' && imageFile !== null) {
      console.log({ isDog: isDog, isCat: isCat, description: introduce });
      try {
        const formData = new FormData();
        formData.append('url', imageFile);
        const res = await photoApi(formData);
        if (res.status === 200) {
          console.log('사진보내기성공!', res);
          const photoId: number = res.data.id;
          const uploadBody = {
            isDog: isDog,
            isCat: isCat,
            description: introduce,
            photo: photoId,
            tag: '',
          };
          try {
            const res = await upLoadApi(id, uploadBody);
            if (res.status === 200) {
              console.log('사진업로드 성공', res);
              navigate('/');
            }
          } catch (error) {
            console.log('사진업로드에러', error);
          }
        }
      } catch (error) {
        console.log('error', error);
      }
    } else {
      alert('내용을 입력하세요');
    }
  };
  const handleFileChange = (newFile: any) => {
    setImageFile(newFile);
    const reader = new FileReader();
    reader.readAsDataURL(newFile);
    reader.onload = () => {
      setUploadImage(reader.result as string);
    };
  };
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
      <UserHeader headerTitle={isEdit ? '게시글 수정' : '새 게시글'} />
      <Container>
        <UploadContainer>
          <UploadForm
            typeof="submit"
            onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
              handleUploadSubmit(e);
            }}
          >
            <FileInput
              type="file"
              id="uploadInput"
              accept="image/jpg, image/png, image/jpeg"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                handleFileChange(e.target.files![0]);
              }}
            />
            {isEdit ? <EditImage editImage={editImage} /> : <ShowImage upLoadImage={upLoadImage}></ShowImage>}
            <ToggleBtnContainer isEdit={isEdit}>
              <BtnContainer>
                <ToggleBtn
                  onClick={() => {
                    setIsDog(!isDog);
                    setIsCat(!isCat);
                  }}
                >
                  {isDog ? <DogBtn src={dogBtn} /> : <CatBtn src={catBtn} />}
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
              {isEdit ? '수정' : '공유'}
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
const ShowImage = styled.div<{ upLoadImage: string }>`
  width: 100%;
  padding-bottom: 100%;
  background-color: #000000;
  background-image: url(${props => props.upLoadImage});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  border-bottom: 1px solid gainsboro;
`;
const EditImage = styled.div<{ editImage: string }>`
  width: 100%;
  padding-bottom: 100%;
  background-color: #000000;
  background-image: url(${props => props.editImage});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  border-bottom: 1px solid gainsboro;
`;
const ToggleBtnContainer = styled.div<{ isEdit: any }>`
  position: relative;
  background-color: #ffff;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid gainsboro;
  display: ${props => (props.isEdit ? 'none' : '')};
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
const UploadBtn = styled.button<{ hover: string }>`
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

export default UploadEditUi;

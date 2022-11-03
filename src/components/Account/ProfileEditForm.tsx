import { MouseEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { getAccount, getMyPage, putUpdateAccount } from '../../api/account';
import { photoApi } from '../../api/board';
import { profileThumbnailImgState, profileUploadFileState } from '../../store/profileEdit';
import { SignSubmitBtnStyled } from '../../styles/Account/BtnStyles';
import { FormStyled } from '../../styles/Account/FormStyles';
import { MainInputStyled } from '../../styles/Account/InputStyles';
import { TextAreaStyled } from '../../styles/Account/TextAreaStyles';
import Input from '../common/Input';
import TextArea from '../common/TextArea';
import EditProfileImage from './EditProfileImage';

function ProfileEditForm() {
  const navigate = useNavigate();
  const [userId, setUserId] = useState<number>(-1);
  const [name, setName] = useState<string>('');
  const [introduce, setIntroduce] = useState<string>('');
  const profileUploadFile = useRecoilValue(profileUploadFileState);
  const setProfileThumbnailImgState = useSetRecoilState(profileThumbnailImgState);

  useEffect(() => {
    getLoginChecked();
  }, []);

  async function getLoginChecked() {
    try {
      // 로그인 확인 및 유저 데이터 받아옴, 로그인이 아니면 throw
      const accountResponse = await getAccount();
      const accountData = accountResponse.data;
      setName(accountData.username);
      setIntroduce(accountData.intro);
      setUserId(accountData.id);

      // 마이 페이지 조회 데이터를 받아와 데이터 갱신
      const myPageResponse = await getMyPage(accountData.id);
      if (myPageResponse.status === 200) {
        const myPageData = myPageResponse.data;
        const { url } = myPageData.Profile;
        const fileName = url.substring(url.lastIndexOf('\\') + 1, url.length);
        setProfileThumbnailImgState(`http://${location.hostname}:3030/api/image/${fileName}`);
      }
    } catch (error) {
      console.error(error);
      alert('로그인이 필요합니다! 로그인 화면으로 이동합니다.');
      navigate('/login');
    }
  }

  /** 수정 버튼 클릭 이벤트 */
  async function handleClickSubmit(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    try {
      let photoId = -1;
      if (profileUploadFile) {
        const formData = new FormData();
        formData.append('url', profileUploadFile);
        const photoResponse = await photoApi(formData);
        if (photoResponse.status === 200) {
          photoId = photoResponse.data.id;
        }
      }
      if (userId) {
        const updateAccountResponse = await putUpdateAccount({
          userId,
          intro: introduce,
          photo: photoId,
        });
        if (updateAccountResponse.status === 200) {
          alert('프로필 정보가 수정되었습니다.');
        }
      }
    } catch (error) {
      console.error(error);
      alert('프로필 수정 실패');
    }
  }

  return (
    <Container>
      <FormStyled>
        <ProfileImageContainer>
          <EditProfileImage />
        </ProfileImageContainer>
        <InputContainer>
          <InputLabel>사용자 이름</InputLabel>
          <Input
            type="text"
            // required
            RenderComponent={MainInputStyled}
            value={name}
            setValue={setName}
            placeholder="사용자 이름을 입력하세요(필수)"
          />
        </InputContainer>
        <InputContainer>
          <InputLabel>소개</InputLabel>
          <TextArea
            value={introduce}
            setValue={setIntroduce}
            WrappedComponent={TextAreaStyled}
            placeholder="소개를 입력하세요"
          />
        </InputContainer>
        <Confirm onClick={handleClickSubmit}>수정</Confirm>
      </FormStyled>
    </Container>
  );
}

export default ProfileEditForm;

const Container = styled.div`
  margin: 1rem;
`;

const ProfileImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const InputLabel = styled.label`
  margin-bottom: 0.5rem;
  font-size: 0.8rem;
  color: gray;
`;

const Confirm = styled(SignSubmitBtnStyled)`
  align-self: center;
  width: 30%;
`;

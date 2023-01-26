import { MouseEvent, useEffect, useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { getMyPage, putUpdateAccount } from '../../api/account';
import { photoApi } from '../../api/board';
import { profileThumbnailImgState, profileUploadFileState } from '../../store/profileEdit';
import { SignSubmitBtnStyled } from '../../styles/Account/BtnStyles';
import { FormStyled } from '../../styles/Account/FormStyles';
import { MainInputStyled } from '../../styles/Account/InputStyles';
import { TextAreaStyled } from '../../styles/Account/TextAreaStyles';
import Input from '../common/Input';
import TextArea from '../common/TextArea';
import EditProfileImage from './EditProfileImage';

interface Props {
  account: any;
}

function ProfileEditForm({ account }: Props) {
  const [userId, setUserId] = useState<number>(-1);
  const [name, setName] = useState<string>('');
  const [introduce, setIntroduce] = useState<string>('');
  const profileUploadFile = useRecoilValue(profileUploadFileState);
  const setProfileThumbnailImgState = useSetRecoilState(profileThumbnailImgState);

  useEffect(() => {
    loginChecked();
  }, [account]);

  async function loginChecked() {
    try {
      if (!account) {
        return null;
      }

      // 마이 페이지 조회 데이터를 받아와 데이터 갱신
      const myPageResponse = await getMyPage(account.id);
      if (myPageResponse.status === 200) {
        const myPageData = myPageResponse.data;
        console.log('마이페이지데이터!!', myPageData);

        setUserId(myPageData.id);
        setName(myPageData.username);

        // 소개글이 있는 경우
        if (myPageData.intro) {
          setIntroduce(myPageData.intro);
        }

        // 프로필 이미지가 있는 경우
        if (myPageData.Profile) {
          setProfileThumbnailImgState(`http://api.doggydoggykittykitty.site/api/image/${myPageData.Profile.url}`);
        }
      }
    } catch (error) {
      console.error(error);
      alert('마이페이지 데이터 조회 실패');
    }
  }

  /** 수정 버튼 클릭 이벤트 */
  async function handleClickSubmit(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    try {
      let photoId = null;
      // 업로드 파일이 있는 경우
      if (profileUploadFile !== null) {
        const formData = new FormData();
        formData.append('url', profileUploadFile);
        const photoResponse = await photoApi(formData);
        console.log(photoResponse);
        if (photoResponse.status === 200) {
          photoId = photoResponse.data.id;
        }
      }
      // 유저 아이디가 있는 경우
      if (userId && name !== '') {
        const updateAccountResponse = await putUpdateAccount({
          userId,
          username: name,
          intro: introduce,
          photo: photoId,
        });
        if (updateAccountResponse.status === 200) {
          alert('프로필 정보가 수정되었습니다.');
        }
      } else {
        alert('닉네임을 한글자이상 입력해주세요!');
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

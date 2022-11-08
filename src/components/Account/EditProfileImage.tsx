import { ChangeEvent, createRef, MouseEvent, useEffect, useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import styled, { css } from 'styled-components';
import profile2Image from '../../assets/images/profile3.png';
import { profileThumbnailImgState, profileUploadFileState } from '../../store/profileEdit';

function EditProfileImage() {
  const fileInput = createRef<HTMLInputElement>();
  const [profileThumbnailImg, setProfileThumbnailImg] = useState<string>('');
  const setProfileThumbnailImgState = useSetRecoilState(profileThumbnailImgState);
  const setProfileUploadFileState = useSetRecoilState(profileUploadFileState);
  const profileThumbnailImgValue = useRecoilValue(profileThumbnailImgState);

  useEffect(() => {
    setProfileThumbnailImg(profileThumbnailImgValue);
  }, [profileThumbnailImgValue]);

  function handleClickProfileChangeBtn(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    fileInput.current?.click();
  }

  function handleChangeFileInput(event: ChangeEvent<HTMLInputElement>) {
    if (!event.currentTarget.files?.length) return;
    const file = event.currentTarget.files[0];
    if (!file) return;
    setProfileUploadFileState(file);

    const fileReader = new FileReader();
    fileReader.onload = () => {
      if (!fileReader.result) return;
      if (typeof fileReader.result === 'string') {
        setProfileThumbnailImg(fileReader.result);
        setProfileThumbnailImgState(fileReader.result);
      }
    };
    fileReader.readAsDataURL(file);
  }

  return (
    <>
      <ProfileImageContainer>
        {profileThumbnailImg ? <ProfileImage src={profileThumbnailImg} /> : <ProfileImage src={profile2Image} />}
      </ProfileImageContainer>
      <ProfileChangeBtn onClick={handleClickProfileChangeBtn}>프로필 사진 변경</ProfileChangeBtn>
      <input
        ref={fileInput}
        type="file"
        accept="image/jpg, image/png, image/jpeg"
        onChange={handleChangeFileInput}
        style={{ display: 'none' }}
      />
    </>
  );
}

export default EditProfileImage;

const ProfileImageContainer = styled.div`
  width: 90px;
  height: 90px;
  margin-bottom: 1rem;
  border-radius: 50px;
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50px;
`;

const ProfileChangeBtn = styled.button`
  font-size: 1rem;
  color: #5271ff;

  :hover {
    color: #b0befc;
  }
`;

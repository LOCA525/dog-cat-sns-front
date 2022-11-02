import styled from 'styled-components';

function EditProfileImage() {
  return (
    <>
      <ProfileImage />
      <ProfileChangeBtn type="button">프로필 사진 변경</ProfileChangeBtn>
    </>
  );
}

export default EditProfileImage;

const ProfileImage = styled.div`
  width: 90px;
  height: 90px;
  margin-bottom: 1rem;
  border-radius: 50px;
  background-color: red;
`;

const ProfileChangeBtn = styled.button`
  font-size: 1rem;
  color: #5271ff;

  :hover {
    color: #b0befc;
  }
`;

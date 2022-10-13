import { useState } from 'react';
import styled from 'styled-components';
import { FormStyled } from '../../styles/Account/FormStyles';
import { MainInputStyled } from '../../styles/Account/InputStyles';
import { TextAreaStyled } from '../../styles/Account/TextAreaStyles';
import Input from '../common/Input';
import TextArea from '../common/TextArea';
import EditProfileImage from './EditProfileImage';

function ProfileEditForm() {
  const [name, setName] = useState<string>('');
  const [introduce, setIntroduce] = useState<string>('');

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
            required
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

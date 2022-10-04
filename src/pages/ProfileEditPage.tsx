import { ChangeEvent, useMemo, useState } from 'react';
import styled from 'styled-components';
import BottomNav from '../components/BottomNav';
import Header from '../components/Header';

function ProfileEditPage() {
  const [name, setName] = useState<string>('');
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
    <>
      <Header />
      <MainContainer>
        <Form>
          <ProfileImageContainer>
            <ProfileImage />
            <ProfileChangeBtn type="button">프로필 사진 변경</ProfileChangeBtn>
          </ProfileImageContainer>
          <InputContainer>
            <InputLabel>사용자 이름</InputLabel>
            <Input
              required
              type="text"
              value={name}
              onChange={event => setName(event.currentTarget.value)}
              placeholder="사용자 이름을 입력하세요(필수)"
            />
          </InputContainer>
          <InputContainer>
            <InputLabel>소개</InputLabel>
            <TextArea
              value={introduce}
              style={{ height: textAreaHeight }}
              onChange={handleChangeIntroduce}
              placeholder="소개를 입력하세요"
            />
          </InputContainer>
        </Form>
      </MainContainer>
      <BottomNav />
    </>
  );
}

export default ProfileEditPage;

const MainContainer = styled.div`
  margin: 1rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const ProfileImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
`;

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

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const InputLabel = styled.label`
  margin-bottom: 0.5rem;
  font-size: 0.8rem;
  color: gray;
`;

const Input = styled.input`
  padding-bottom: 0.5rem;
  font-size: 1rem;
  border-bottom: 1px solid gainsboro;

  ::placeholder {
    font-size: 0.7rem;
  }
`;

const TextArea = styled.textarea`
  font-size: 1rem;
  border: none;
  outline: none;
  resize: none;
  overflow-y: hidden;
  border-bottom: 1px solid gainsboro;
  line-height: 1.5rem;

  ::placeholder {
    font-size: 0.7rem;
    color: gray;
  }
`;

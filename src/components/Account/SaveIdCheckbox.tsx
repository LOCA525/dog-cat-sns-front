import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import useGetLocalUserId from '../../hooks/useGetLocalUserId';
import { saveIdCheckboxState } from '../../store/loginChecked';
import { CHECKED_SAVE_ID } from '../../types/localStorageKeys';
import { Props } from './LoginCheckbox';

// 로그인시 아이디 저장 체크박스에 따라 로컬에 저장된 아이디를 가져와 적용시키는 기능입니다.
function SaveIdCheckbox({ setUserId }: Props) {
  const initChecked = localStorage.getItem(CHECKED_SAVE_ID);
  const [checkedSaveId, setCheckedSaveId] =
    useRecoilState<boolean>(saveIdCheckboxState);
  const getUserId = useGetLocalUserId();

  useEffect(() => {
    return () => {
      setCheckedSaveId(initChecked !== null && initChecked !== 'false');
      const savedUserId = getUserId();
      checkedSaveId && savedUserId && setUserId(savedUserId);
    };
  }, []);

  const handleCheckedSaveIdChange = () => {
    const newState = !checkedSaveId;
    localStorage.setItem(CHECKED_SAVE_ID, newState ? 'true' : 'false');
    setCheckedSaveId(newState);
  };

  return (
    <Container>
      <Checkbox
        type="checkbox"
        id="SaveIdCheckbox"
        checked={checkedSaveId}
        onChange={handleCheckedSaveIdChange}
      />
      <Label htmlFor="SaveIdCheckbox">아이디 저장</Label>
    </Container>
  );
}

export default SaveIdCheckbox;

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Label = styled.label`
  font-size: 0.8rem;
  color: gray;

  :hover {
    color: black;
  }
`;

const Checkbox = styled.input`
  margin-right: 0.3rem;
  width: 1rem;
  height: 1rem;
  accent-color: #ff7f00;

  :hover {
    cursor: pointer;
  }
`;

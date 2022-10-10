import { useState } from 'react';
import styled from 'styled-components';
import useGetSavedUserId from '../../hooks/useGetSavedUserId';
import { CHECKED_SAVE_ID } from '../../types/localStorageKeys';
import { Props } from './LoginCheckbox';

function SaveIdCheckbox({ setUserId }: Props) {
  const initChecked = localStorage.getItem(CHECKED_SAVE_ID);
  const [checkedSaveId, setCheckedSaveId] = useState<boolean>(
    initChecked !== null && initChecked !== 'false',
  );

  const saveUserId = useGetSavedUserId();
  if (checkedSaveId) setUserId(saveUserId);

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

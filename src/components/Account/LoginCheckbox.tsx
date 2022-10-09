import styled from 'styled-components';
import { SAVED_USER_ID } from '../../types/localStorageKeys';
import { ReactSetState } from '../../types/reactTypes';
import SaveIdCheckbox from './SaveIdCheckbox';

export declare interface Props {
  setUserId: ReactSetState<string>;
}

function LoginCheckbox({ setUserId }: Props) {
  return (
    <Container>
      <SaveIdCheckbox setUserId={setUserId} />
    </Container>
  );
}

export default LoginCheckbox;

export function saveUserId(userId: string) {
  localStorage.setItem(SAVED_USER_ID, userId);
  return true;
}

const Container = styled.div`
  display: flex;
  align-self: flex-start;
  margin-left: 0.2rem;
  gap: 1rem;
`;

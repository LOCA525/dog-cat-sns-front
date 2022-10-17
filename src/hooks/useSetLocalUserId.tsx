import { SAVED_USER_ID } from '../types/localStorageKeys';

// 로컬에 userId를 저장하는 함수
function useSetLocalUserId() {
  function saveId(id: string) {
    localStorage.setItem(SAVED_USER_ID, id);
  }
  return saveId;
}

export default useSetLocalUserId;

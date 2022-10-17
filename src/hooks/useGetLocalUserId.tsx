import { SAVED_USER_ID } from '../types/localStorageKeys';

// 로컬에 저장된 userId를 반환하는 함수
function useGetLocalUserId() {
  function getUserId() {
    return localStorage.getItem(SAVED_USER_ID);
  }
  return getUserId;
}

export default useGetLocalUserId;

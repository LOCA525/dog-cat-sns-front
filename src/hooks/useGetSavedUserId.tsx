import { useState } from 'react';
import { SAVED_USER_ID } from '../types/localStorageKeys';

/**
 * 로컬에 저장된 userId를 반환하는 함수
 */
function useGetSavedUserId() {
  const [userId, setUserId] = useState<string>('');

  const saveUserId = localStorage.getItem(SAVED_USER_ID);
  if (saveUserId) setUserId(saveUserId);

  return userId;
}

export default useGetSavedUserId;

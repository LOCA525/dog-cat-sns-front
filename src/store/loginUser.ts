import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const loginUserId = atom<any>({
  key: 'loginUserId',
  default: null,
  effects_UNSTABLE: [persistAtom],
});

export const loginUserProfileUrl = atom<any>({
  key: 'loginUserProfileUrl',
  default: '',
  effects_UNSTABLE: [persistAtom],
});

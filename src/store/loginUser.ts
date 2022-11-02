import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const loginUserId = atom<any>({
  key: 'loginUserId',
  default: null,
  effects_UNSTABLE: [persistAtom],
});

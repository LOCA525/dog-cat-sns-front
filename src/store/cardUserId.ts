import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const cardUserId = <any>atom({
  key: 'cardUserId',
  default: null,
  effects_UNSTABLE: [persistAtom],
});

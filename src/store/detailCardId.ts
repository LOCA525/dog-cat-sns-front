import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const detailCardId = atom<number>({
  key: 'detailCardId',
  default: 1,
  effects_UNSTABLE: [persistAtom],
});

export const detailCardUserName = atom({
  key: 'detailCardUserName',
  default: '',
  effects_UNSTABLE: [persistAtom],
});

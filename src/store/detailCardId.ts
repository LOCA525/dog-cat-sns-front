import { atom } from 'recoil';

export const detailCardId = atom<number>({
  key: 'detailCardId',
  default: 1,
});

export const detailCardUserName = atom({
  key: 'detailCardUserName',
  default: '',
});

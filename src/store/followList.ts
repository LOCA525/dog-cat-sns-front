import { atom } from 'recoil';

export const followList = atom<any>({
  key: 'followList',
  default: '',
});

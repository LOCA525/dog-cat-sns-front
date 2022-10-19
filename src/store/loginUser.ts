import { atom } from 'recoil';

export const loginUserData = atom<any>({
  key: 'loginUserData',
  default: null,
});

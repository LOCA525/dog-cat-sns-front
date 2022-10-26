import { atom } from 'recoil';

export const editCardItem = atom({
  key: 'editCardItem',
  default: {},
});

export const editCardImage = atom({
  key: 'editCardImage',
  default: '',
});

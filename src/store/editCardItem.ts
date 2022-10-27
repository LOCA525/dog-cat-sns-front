import { atom } from 'recoil';

export const editCardItem = atom({
  key: 'editCardItem',
  default: { description: '', id: 1 },
});

export const editCardImage = atom({
  key: 'editCardImage',
  default: '',
});

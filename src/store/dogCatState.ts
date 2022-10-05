import { atom } from 'recoil';

export const dogCatState = atom({
  key: 'dogCatState',
  default: true as boolean,
});

// true = 강아지 , false = 고양이

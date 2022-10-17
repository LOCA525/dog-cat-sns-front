import { atom } from 'recoil';

export const saveIdCheckboxState = atom<boolean>({
  key: 'saveIdCheckbox',
  default: false,
});

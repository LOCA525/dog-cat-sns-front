import { atom } from 'recoil';

export const profileUploadFileState = atom<File | null>({
  key: 'profileUploadFile',
  default: null,
});

export const profileThumbnailImgState = atom<string>({
  key: 'profileThumbnailImg',
  default: '',
});

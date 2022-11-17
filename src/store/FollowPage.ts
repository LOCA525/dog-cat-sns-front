import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const followListUserId = atom<any>({
  key: 'followListUserId',
  default: null,
  effects_UNSTABLE: [persistAtom],
});

export const followListUserName = atom<any>({
  key: 'followListUserName',
  default: '',
  effects_UNSTABLE: [persistAtom],
});

export const isFollowerList = atom<any>({
  key: 'isFollowerList',
  default: true,
});

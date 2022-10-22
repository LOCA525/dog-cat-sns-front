import { type } from 'os';
import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const dogCards = atom({
  key: 'dogCards',
  default: null,
});
export const catCards = atom({
  key: 'catCards',
  default: null,
});
///디폴트카드는 강아지 카드
export const cardState = atom({
  key: 'iscardState',
  default: dogCards,
  effects_UNSTABLE: [persistAtom],
});

import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const commentCard = <any>atom({
  key: 'commentCard',
  default: {
    cardId: 1,
    photo: 'photoUrl',
    cardUserName: '',
    description: '',
    createDate: '',
  },
  effects_UNSTABLE: [persistAtom],
});

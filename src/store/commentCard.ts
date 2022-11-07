import { atom } from 'recoil';

export const commentCard = <any>atom({
  key: 'commentCard',
  default: {
    cardId: 1,
    photo: 'photoUrl',
    cardUserName: '',
    description: '',
    createDate: '',
  },
});

import { atom, selector } from 'recoil';
import { followList } from './followList';

//getBoard로 통신해서 날아온 카드리스트를 담은 곳
export const cardList = atom({
  key: 'cardList',
  default: [],
});

export const cardFilterState = atom({
  key: 'cardFilterState',
  default: 'dogState',
});

export const filteredCardState = selector({
  key: 'filteredCardState',
  get: ({ get }) => {
    const filter = get(cardFilterState);
    const card = get(cardList);

    switch (filter) {
      case 'dogState':
        return card.filter((item: any) => item.type === 'DOG');

      case 'catState':
        return card.filter((item: any) => item.type === 'CAT');

      default:
        return card;
    }
  },
});

// 개,고양이 필터링된 카드들을 / 팔로우상태에 따라 다시 필터링하는 코드
export const cardFollowState = atom({
  key: 'cardFollowState',
  default: 'all',
});

export const followCardState = selector({
  key: 'followCardState',
  get: ({ get }) => {
    const filter = get(cardFollowState);
    const card = get(filteredCardState);
    const followId = get(followList);

    switch (filter) {
      case 'all':
        return card;

      case 'follow':
        return card.filter((item: any) => followId.some((i: any) => i.id === item.User.id));

      default:
        return card;
    }
  },
});

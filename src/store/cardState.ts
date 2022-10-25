import { atom, selector } from 'recoil';

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

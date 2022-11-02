import api from '.';

export const getMypageData = async (id: number) => {
  const res = await api.get(`account/mypage/${id}`);
  return res;
};

import { api } from '.';

export const getAccountData = async () => {
  const res = await api.get('/account');
  return res;
};

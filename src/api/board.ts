import api from '.';

const loginBody = {
  email: 'loca@naver.com',
  password: '1234',
};

export const postLogin = async () => {
  const res = await api.post('account/login', loginBody);
  return res;
};
export const getAccountData = async () => {
  const res = await api.get('/account', { withCredentials: true });
  return res;
};

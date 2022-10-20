import { useRecoilValue } from 'recoil';
import { loginUserData } from '../store/loginUser';
import api from '.';

interface uploadBody {
  description: string;
  isDog: boolean;
  isCat: boolean;
  tag: string;
  photo: number;
}
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
export const photoApi = async (formData: any) => {
  const res = await api.post('/photo', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return res;
};
export const upLoadApi = async (userId: number, uploadBody: uploadBody) => {
  const res = await api.post(`/board/write/${userId}`, uploadBody);
  return res;
};

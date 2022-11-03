import api from '.';

export declare interface JoinBody {
  email: string;
  password: string;
  username: string;
}

export const postJoin = (body: JoinBody) => api.post('/account/join', body);

export declare interface LoginBody {
  email: string;
  password: string;
}

export const postLogin = (body: LoginBody) => api.post('/account/login', body);

export const postLogOut = async () => {
  const res = await api.post('/account/logout');
  return res;
};
interface followBody {
  from: number;
  to: number;
}

export const postFollowApi = async (id: number, body: followBody) => {
  const res = await api.post(`/account/follow/${id}`, body);
  return res;
};

export const deleteFollowApi = async (id: number, body: followBody) => {
  const res = await api.delete(`/account/follow/${id}`, { data: body });
  return res;
};

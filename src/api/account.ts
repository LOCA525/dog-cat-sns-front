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

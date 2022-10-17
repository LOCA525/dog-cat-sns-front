import api from '.';

export declare interface JoinBody {
  email: string;
  password: string;
  username: string;
}

export const postJoin = (body: JoinBody) => api.post('/account/join', body);

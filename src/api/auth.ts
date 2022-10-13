import axios from '.';

export declare interface JoinBody {
  email: string;
  password: string;
  username: string;
}

export const postJoin = (body: JoinBody) => axios.post('/account/join', body);

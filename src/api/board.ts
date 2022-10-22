import api from '.';

interface uploadBody {
  description: string;
  isDog: boolean;
  isCat: boolean;
  tag: string;
  photo: number;
}
//현재 로그인 회원 id값, 정보 조회
export const getAccountData = async () => {
  const res = await api.get('/account', { withCredentials: true });
  return res;
};
//게시글 등록전 사진 등록하고 phto id값을 받아오는 api
export const photoApi = async (formData: any) => {
  const res = await api.post('/photo', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return res;
};
//포토 api로 사진등록후 받아온 photo id값을 실어 게시글 등록하는 api
export const upLoadApi = async (userId: number, uploadBody: uploadBody) => {
  const res = await api.post(`/board/write/${userId}`, uploadBody);
  return res;
};
//게시글 조회
export const getBoardApi = async (userId: number) => {
  const res = await api.get(`/board/?userId=${userId}`);
  return res;
};

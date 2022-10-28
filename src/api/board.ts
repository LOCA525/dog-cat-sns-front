import api from '.';

interface uploadBody {
  description: string;
  isDog: boolean;
  isCat: boolean;
  tag: string;
  photo: number;
}
interface editBody {
  description: string;
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
//게시글 삭제
export const deleteCardApi = async (cardId: number) => {
  const res = await api.delete(`/board/write/${cardId}`);
  return res;
};
//게시글 수정
export const editCardApi = async (cardId: number, editBody: editBody) => {
  const res = await api.put(`/board/write/${cardId}`, editBody);
  return res;
};
//게시글 좋아요
export const likeCardApi = async () => {
  const res = await api.post('/board/like');
  return res;
};
//게시글 좋아요 취소
export const disLikeCardApi = async () => {
  const res = await api.delete('/board/like');
  return res;
};

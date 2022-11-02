import { useEffect } from 'react';
import axios, { type AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { getAccountData, getBoardApi } from '../api/board';
import Board from '../components/Board/Board';
import BottomNav from '../components/BottomNav';
import Header from '../components/Header/Header';
import { cardList } from '../store/cardState';
import { loginUserId } from '../store/loginUser';

function MainPage() {
  const [id, setUserId] = useRecoilState(loginUserId);
  const [card, setCard] = useRecoilState(cardList);
  const navigate = useNavigate();

  const getAccount = async () => {
    try {
      const res = await getAccountData();
      if (res.status === 200) {
        const res = await getAccountData();
        setUserId(res.data.id); ///로그인 조회 api 사용후 id값을 recoilState 저장
        return true;
      }
    } catch (error) {
      console.log('에러', error);

      // 로그인이 되어 있지 않는 경우 로그인 페이지로 이동
      if (axios.isAxiosError(error)) {
        const { response } = error as AxiosError;
        if (response && response.status === 404) {
          navigate('/login');
        }
      }
      return false;
    }
  };
  const getBoard = async () => {
    try {
      const res = await getBoardApi(id);
      if (res.status == 200) {
        const res = await getBoardApi(id);
        console.log('게시글 조회 성공', res);
        const cards = res.data;
        setCard(cards);
      }
    } catch (error) {
      console.log('게시글조회에러', error);
    }
  };

  useEffect(() => {
    getAccount();
    getBoard();
  }, []);

  return (
    <div>
      <Header />
      <Board />
      <BottomNav />
    </div>
  );
}

export default MainPage;

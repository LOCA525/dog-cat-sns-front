import { useEffect } from 'react';
import { getAccountData, postLogin } from '../api/board';
import Board from '../components/Board';
import BottomNav from '../components/BottomNav';
import Header from '../components/Header';

function MainPage() {
  const getAccount = async () => {
    try {
      const res = await getAccountData();
      if (res.status === 200) {
        const res = await getAccountData();
        console.log(res);
      }
    } catch (error) {
      console.log('에러', error);
    }
  };
  const login = async () => {
    try {
      const res = await postLogin();
      if (res.status === 200) {
        const res = await postLogin();
        console.log(res);
      }
    } catch (error) {
      console.log('로그인에러', error);
    }
  };

  useEffect(() => {
    login();
    getAccount();
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

import { useEffect } from 'react';
import { getAccountData } from '../api/board';
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

  useEffect(() => {
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

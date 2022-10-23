import { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { getAccountData, getBoardApi } from '../api/board';
import Board from '../components/Board';
import BottomNav from '../components/BottomNav';
import ValidationModal from '../components/common/ValidationModal';
import Header from '../components/Header';
import { catCards, dogCards } from '../store/cardState';
import { loginUserId } from '../store/loginUser';

function MainPage() {
  const [id, setUserId] = useRecoilState(loginUserId);
  const [dogCard, setDogCard] = useRecoilState(dogCards);
  const [catCard, setCatCard] = useRecoilState(catCards);

  const getAccount = async () => {
    try {
      const res = await getAccountData();
      if (res.status === 200) {
        const res = await getAccountData();
        setUserId(res.data.id); ///로그인 조회 api 사용후 id값을 recoilState 저장
      }
    } catch (error) {
      console.log('에러', error);
    }
  };
  const getBoard = async () => {
    try {
      const res = await getBoardApi(id);
      if (res.status == 200) {
        const res = await getBoardApi(id);
        console.log('게시글 조회 성공', res);
        const cards = res.data;
        //get api로 받아온 카드들을 filter를 이용해 고양이/개 따로 나눠 변수에 담음
        const isDog = (item: any) => {
          if (item.type === 'DOG') {
            return true;
          }
        };
        const isCat = (item: any) => {
          if (item.type === 'CAT') {
            return true;
          }
        };
        //dog,cat 필터된 데이터들을 recoilState에 저장
        const dogData = cards.filter(isDog);
        const catData = cards.filter(isCat);
        setDogCard(dogData);
        setCatCard(catData);
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

import { useEffect, useState } from 'react';
import axios, { type AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { getFollowApi } from '../api/account';
import { getAccountData, getBoardApi } from '../api/board';
import Board from '../components/Board/Board';
import BottomNav from '../components/BottomNav/BottomNav';
import Header from '../components/Header/Header';
import { cardList } from '../store/cardState';
import { followList } from '../store/followList';
import { loginUserId, loginUserProfileUrl } from '../store/loginUser';

function MainPage() {
  const [id, setUserId] = useRecoilState(loginUserId);
  const [profileUrl, setProfileUrl] = useRecoilState(loginUserProfileUrl);
  const [, setCard] = useRecoilState(cardList);
  const [follow, setFollowList] = useRecoilState(followList);
  const [isProfileImage, setIsProfileImage] = useState(false);
  const [userProfileImage, setUserProfileImage] = useState('');
  const navigate = useNavigate();

  const getAccount = async () => {
    try {
      const res = await getAccountData();
      if (res.status === 200) {
        const res = await getAccountData();
        console.log('로그인정보', res);
        setUserId(res.data.id); ///로그인 조회 api 사용후 id값을 recoilState 저장
        if (res.data.profile === null) {
          setIsProfileImage(false);
        } else {
          setIsProfileImage(true);
          setUserProfileImage(`http://localhost:3030/api/image/${res.data?.profile.url}`);
          setProfileUrl(`http://localhost:3030/api/image/${res.data?.profile.url}`);
        }
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

  const getFollowList = async () => {
    try {
      const res = await getFollowApi(id);
      if (res.status === 200) {
        const res = await getFollowApi(id);
        console.log('팔로우목록', res);
        const following = res.data.Following; //팔로잉중인 유저
        setFollowList(following);
        //팔로우중인 유저 값 recoilState 저장
      }
    } catch (error) {
      console.log('팔로우목록조회실패', error);
    }
  };

  useEffect(() => {
    getAccount();
    getBoard();
    getFollowList();
  }, []);

  return (
    <div>
      <Header isProfileImage={isProfileImage} userProfileImage={userProfileImage} />
      <Board />
      <BottomNav />
    </div>
  );
}

export default MainPage;

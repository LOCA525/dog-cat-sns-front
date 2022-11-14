import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { getFollowApi } from '../../api/account';
import noProfileImage from '../../assets/images/profile3.png';
import { cardUserId } from '../../store/cardUserId';
import { loginUserId } from '../../store/loginUser';
import { modeState } from '../../store/themeColor';

function BellModal({ setBellModalOpen }: any) {
  const loginUser = useRecoilValue(loginUserId);
  const { buttonColor } = useRecoilValue(modeState);
  const [followList, setFollowList] = useState([]);
  const [, setUserClick] = useRecoilState(cardUserId);
  const modalRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const getFollowAlarm = async () => {
    try {
      const res = await getFollowApi(loginUser);
      if (res.status === 200) {
        const res = await getFollowApi(loginUser);
        console.log('팔로우조회', res);
        setFollowList(res.data.Follower);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFollowAlarm();
  }, []);
  console.log('followList', followList);

  useEffect(() => {
    const handler = (e: any) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setBellModalOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => {
      document.removeEventListener('mousedown', handler);
    };
  });

  return (
    <ModalContainer ref={modalRef} buttonColor={buttonColor}>
      <div className="triangle"></div>
      <AlarmContainer>
        {followList.map((item: any) => {
          return (
            <UserWrap key={item.id}>
              <UserBtnContainer>
                <UserBtn
                  src={item.Profile === null ? noProfileImage : `http://localhost:3030/api/image/${item.Profile?.url}`}
                  onClick={() => {
                    navigate(`/mypage/${item.username}`);
                    setUserClick(item.id);
                  }}
                />
              </UserBtnContainer>
              <UserNameContainer>
                <span
                  onClick={() => {
                    navigate(`/mypage/${item.username}`);
                    setUserClick(item.id);
                  }}
                >
                  {item.username}
                </span>
                님이 회원님을 팔로우하기 시작했습니다.
              </UserNameContainer>
            </UserWrap>
          );
        })}
      </AlarmContainer>
    </ModalContainer>
  );
}

const ModalContainer = styled.div<{ buttonColor: string }>`
  position: absolute;
  right: 47px;
  top: 60px;
  .triangle {
    right: 10px;
    top: -8px;
    width: 10px;
    background-color: ${props => props.buttonColor};
    height: 30px;
    border-radius: 1px;
    transform: rotate(135deg);
    position: absolute;
  }
`;

const AlarmContainer = styled.div`
  width: 250px;
  height: 100%;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  color: #3e3e3e;
  box-shadow: 6px 6px 6px 6px #00000040;
  background-color: #ffff;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;
  padding: 0px 10px 10px 10px;
`;

const UserBtnContainer = styled.div`
  width: 37px;
  height: 37px;
  border-radius: 50px;
  margin-right: 5px;
  cursor: pointer;
`;
const UserBtn = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50px;
`;

const UserWrap = styled.div`
  text-align: left;
  display: flex;
  margin-top: 10px;
  font-weight: 500;
  span {
    font-weight: 900;
    cursor: pointer;
  }
`;

const UserNameContainer = styled.div`
  flex: 1;
`;
export default BellModal;

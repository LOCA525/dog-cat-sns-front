import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { ReactComponent as OutBtn } from '../../assets/images/logOut.svg';
import { ReactComponent as SettingIcon } from '../../assets/images/setting2.svg';
import { ReactComponent as UserBtn } from '../../assets/images/User.svg';
import { cardUserId } from '../../store/cardUserId';
import { loginUserId } from '../../store/loginUser';
import { modeState } from '../../store/themeColor';

function UserModal({ setModalOpen }: any) {
  const userId = useRecoilValue(loginUserId);
  const modalRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const { buttonColor } = useRecoilValue(modeState);
  const [, setCardUserId] = useRecoilState(cardUserId);
  useEffect(() => {
    const handler = (e: any) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setModalOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => {
      document.removeEventListener('mousedown', handler);
    };
  });

  const goProfile = () => {
    setCardUserId(userId);
    navigate(`/mypage/profile`);
  };

  return (
    <ModalContainer ref={modalRef} buttonColor={buttonColor}>
      <div className="triangle"></div>
      <BtnContainer>
        <ProfileBtn onClick={goProfile}>
          <UserImageContainer>
            <UserBtn width={'15px'} height={'15px'} fill={buttonColor} />
          </UserImageContainer>
          프로필
        </ProfileBtn>
        <SettingBtn
          onClick={() => {
            navigate('/setting');
          }}
        >
          <SettingIconContainer>
            <SettingIcon width={'15px'} height={'15px'} fill={buttonColor} />
          </SettingIconContainer>
          설정
        </SettingBtn>
        <LogOutBtn>
          <OutImageContainer>
            <OutBtn width={'15px'} height={'15px'} stroke={buttonColor} />
          </OutImageContainer>
          로그아웃
        </LogOutBtn>
      </BtnContainer>
    </ModalContainer>
  );
}

const ModalContainer = styled.div<{ buttonColor: string }>`
  position: absolute;
  right: 0px;
  top: 50px;
  .triangle {
    right: 10px;
    top: -5px;
    width: 10px;
    background-color: ${props => props.buttonColor};
    height: 30px;
    border-radius: 1px;
    transform: rotate(135deg);
    position: absolute;
  }
`;
const BtnContainer = styled.div`
  width: 80px;
  height: 100%;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  color: #3e3e3e;
  box-shadow: 0px 6px 6px 0px #00000040;
  background-color: #ffff;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;
`;

const ProfileBtn = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: left;
  cursor: pointer;
  :hover {
    background-color: rgb(240, 240, 240);
  }
`;
const UserImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 5px;
`;
const LogOutBtn = styled.div`
  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
  padding: 10px 7px 10px 7px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  :hover {
    background-color: rgb(240, 240, 240);
  }
`;
const OutImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 2px;
`;

const SettingIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`;
const SettingBtn = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: left;
  align-items: center;
  cursor: pointer;
  :hover {
    background-color: rgb(240, 240, 240);
  }
`;

export default UserModal;

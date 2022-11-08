import { useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { ReactComponent as BellBtn } from '../../assets/images/Bell.svg';
import noProfileImage from '../../assets/images/profile3.png';
import { ReactComponent as SearchBtn } from '../../assets/images/search.svg';
import { cardFilterState } from '../../store/cardState';
import { blueState, modeState, orangeState } from '../../store/themeColor';
import UserModal from './UserModal';

function Header({ isProfileImage, userProfileImage }: any) {
  const [Theme, setTheme] = useRecoilState(modeState);
  const orangemode = useRecoilValue(orangeState);
  const bluemode = useRecoilValue(blueState);
  const [, setFilter] = useRecoilState(cardFilterState);
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const themeChangeClick = () => {
    document.querySelector('.boardContainer')?.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    if (Theme === orangemode) {
      setTheme(bluemode);
      setFilter('catState');
    } else {
      setTheme(orangemode);
      setFilter('dogState');
    }
  };

  const current = useRecoilValue(modeState);
  const buttonColor = current.buttonColor;
  const toggleBtnImage = current.toggleBtnImage;

  return (
    <div>
      <Container>
        <ToggleBtn onClick={themeChangeClick} src={toggleBtnImage} />
        <SearchForm>
          <SearchInput placeholder="search" />
          <SearchBtnContainer>
            <SearchBtn width={'19px'} height={'17px'} fill={buttonColor} />
          </SearchBtnContainer>
        </SearchForm>
        <HeaderBtn>
          <BellBtn width={'28px'} height={'28px'} fill={'#ffff'} stroke={buttonColor} />
          <UserBtnContainer
            onClick={() => {
              setModalOpen(true);
            }}
          >
            <UserBtn src={isProfileImage ? userProfileImage : noProfileImage} />
          </UserBtnContainer>

          {modalOpen && <UserModal modalOpen={modalOpen} setModalOpen={setModalOpen} />}
        </HeaderBtn>
      </Container>
    </div>
  );
}
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgb(223, 227, 232);
  height: 60px;
  width: 100%;
`;

const ToggleBtn = styled.img`
  margin-left: 10px;
  width: 100%;
  max-width: 114px;
  height: 35.76px;
`;

const SearchInput = styled.input`
  width: 100%;
  margin-left: 5px;
  max-width: 400px;
  height: 40px;
  background-color: #eaeef1;
  padding: 20px;
  border-radius: 20px;
  /* ::placeholder {
    color: ;
  } */
`;

const SearchForm = styled.form`
  position: relative;
`;

const SearchBtnContainer = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
`;

const HeaderBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
`;

// const HeartBtn = styled.img`
//   width: 24px;
//   height: 24px;
//   margin-right: 10px;
// `;
const UserBtnContainer = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 30px;
  margin-right: 10px;
  margin-left: 10px;
  cursor: pointer;
`;
const UserBtn = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 30px;
`;

export default Header;

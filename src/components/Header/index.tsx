import React, { useState } from 'react';
import styled from 'styled-components';
import catBtn from '../../assets/images/catBtn.png';
import dogBtn from '../../assets/images/dogBtn.png';
import heartBtn from '../../assets/images/Heart.png';
import searchBtn from '../../assets/images/Search.png';

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
  max-width: 220px;
  height: 40px;
  background-color: #eaeef1;
  padding: 20px;
  border-radius: 20px;
  ::placeholder {
    color: #ff7f00;
  }
`;

const SearchForm = styled.form`
  position: relative;
`;

const SearchBtn = styled.img`
  width: 19px;
  height: 17px;
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

const HeartBtn = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 10px;
`;
const UserBtn = styled.div`
  width: 24px;
  height: 24px;
  background-color: red;
  border-radius: 30px;
  margin-right: 10px;
`;

function Header() {
  const [toggle, setToggle] = useState(true);

  return (
    <div>
      <Container>
        <ToggleBtn
          src={toggle ? catBtn : dogBtn}
          onClick={() => {
            setToggle(!toggle);
          }}
        />
        <SearchForm>
          <SearchInput placeholder="search" />
          <SearchBtn src={searchBtn} />
        </SearchForm>
        <HeaderBtn>
          <HeartBtn src={heartBtn} />
          <UserBtn />
        </HeaderBtn>
      </Container>
    </div>
  );
}

export default Header;

import React from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import leftImage from '../assets/images/leftImage.png';
import { modeState } from '../store/themeColor';

const LogoContainer = styled.div`
  @media screen and (max-width: 1200px) {
    display: none;
  }
`;
const LogoImage = styled.img`
  position: relative;
`;
const WallPaper = styled.img`
  position: absolute;
  top: 40px;
  left: 300px;
  z-index: 1;
`;
function Logo() {
  const current = useRecoilValue(modeState);
  const wallpaper = current.wallPaper;

  return (
    <LogoContainer>
      <LogoImage src={leftImage} />
      <WallPaper src={wallpaper} />
    </LogoContainer>
  );
}

export default Logo;

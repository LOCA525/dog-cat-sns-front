import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import leftImage from '../assets/images/leftImage.png';
import { modeState } from '../store/themeColor';

const LogoContainer = styled.div`
  @media screen and (max-width: 1200px) {
    display: none;
  }
`;
const WallContainer = styled.img`
  max-width: 500px;
`;
const LogoImage = styled.img`
  position: relative;
`;
const WallPaper = styled.img`
  position: relative;
  z-index: 1;
`;
function Logo() {
  const { wallPaper } = useRecoilValue(modeState);

  return (
    <LogoContainer>
      <WallContainer>
        <LogoImage src={leftImage} />
        <WallPaper src={wallPaper} />
      </WallContainer>
    </LogoContainer>
  );
}

export default Logo;

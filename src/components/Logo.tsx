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
  top: 0;
  left: 0;
  z-index: 1;
`;
function Logo() {
  const { wallPaper } = useRecoilValue(modeState);

  return (
    <LogoContainer>
      <LogoImage src={leftImage}>
        <WallPaper src={wallPaper} />
      </LogoImage>
    </LogoContainer>
  );
}

export default Logo;

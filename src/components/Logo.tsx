import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import leftImage from '../assets/images/leftImage.png';
import { modeState } from '../store/themeColor';

const LogoContainer = styled.div`
  @media screen and (max-width: 1200px) {
    display: none;
  }
`;

const LogoImage = styled.img``;
const WallPaper = styled.img`
  z-index: 1;
`;
function Logo() {
  const { wallPaper } = useRecoilValue(modeState);

  return (
    <LogoContainer>
      <LogoImage src={leftImage} />
      <WallPaper src={wallPaper} />
    </LogoContainer>
  );
}

export default Logo;

import { CSSProperties } from 'react';
import titleLogoImg from '../assets/images/titleLogo.png';

interface Props {
  style?: CSSProperties;
}

function TitleLogo({ style }: Props) {
  return (
    <div style={style}>
      <img src={titleLogoImg} alt="titleLogoImg" />
    </div>
  );
}

export default TitleLogo;

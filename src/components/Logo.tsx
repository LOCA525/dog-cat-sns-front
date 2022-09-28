import React from 'react';
import styled from 'styled-components';
import leftImage from '../assets/images/leftImage.png';

const LogoContainer = styled.div`
  @media screen and (max-width: 1200px) {
    display: none;
  }
`;
const LogoImage = styled.img``;

function Logo() {
  return (
    <LogoContainer>
      <LogoImage src={leftImage} />
    </LogoContainer>
  );
}

export default Logo;

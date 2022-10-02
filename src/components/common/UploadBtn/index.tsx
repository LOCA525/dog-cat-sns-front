import React from 'react';
import styled from 'styled-components';
import uploadBtn from '../../../assets/images/uploadBtn.png';

const UploadButton = styled.img`
  width: 25px;
  height: 25px;
`;

function UploadBtn() {
  return <UploadButton src={uploadBtn} />;
}

export default UploadBtn;

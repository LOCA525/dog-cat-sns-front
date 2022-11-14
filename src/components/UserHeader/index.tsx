import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { ReactComponent as BackBtn } from '../../assets/images/back.svg';
import { modeState } from '../../store/themeColor';

interface propsType {
  headerTitle: string;
}

function UserHeader({ headerTitle }: propsType) {
  const { buttonColor } = useRecoilValue(modeState);
  const navigate = useNavigate();
  return (
    <Container>
      <BackBtnContainer>
        <BackBtn
          width={'50px'}
          height={'60px'}
          fill={buttonColor}
          stroke={buttonColor}
          onClick={() => {
            navigate(-1);
          }}
        />
      </BackBtnContainer>

      <HeaderTitle>{headerTitle}</HeaderTitle>
      <EmptyBtn />
    </Container>
  );
}

export default UserHeader;

const Container = styled.div`
  position: fixed;
  max-width: 500px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  width: 100%;
`;
const BackBtnContainer = styled.div`
  cursor: pointer;
`;
const HeaderTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
`;
const EmptyBtn = styled.div`
  width: 45px;
  height: 45px;
`;

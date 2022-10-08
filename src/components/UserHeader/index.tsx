import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { ReactComponent as BackBtn } from '../../assets/images/back.svg';
import { modeState } from '../../store/themeColor';

function UserHeader() {
  const { buttonColor } = useRecoilValue(modeState);

  return (
    <Container>
      <BackBtn
        width={'60px'}
        height={'60px'}
        fill={buttonColor}
        stroke={buttonColor}
      />
      <UserNickName>HELLOLOCA</UserNickName>
      <EmptyBtn />
    </Container>
  );
}

export default UserHeader;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  width: 100%;
  padding: 0 10px 0 10px;
`;

const UserNickName = styled.div`
  font-size: 20px;
  font-weight: bold;
`;
const EmptyBtn = styled.div`
  width: 45px;
  height: 45px;
`;

import styled from 'styled-components';
import homeBtn from '../../../assets/images/Vector.png';

const HomeButton = styled.img`
  width: 20px;
  height: 20px;
`;

function HomeBtn() {
  return <HomeButton src={homeBtn} />;
}

export default HomeBtn;

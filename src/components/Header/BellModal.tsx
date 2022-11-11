import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { modeState } from '../../store/themeColor';

function BellModal() {
  const { buttonColor } = useRecoilValue(modeState);

  return (
    <ModalContainer buttonColor={buttonColor}>
      <div className="triangle"></div>
      <AlarmContainer>
        <div>안녕하세요</div>
        <div>안녕하세요</div>
        <div>안녕하세요</div>
        <div>안녕하세요</div>
        <div>안녕하세요</div>
      </AlarmContainer>
    </ModalContainer>
  );
}

const ModalContainer = styled.div<{ buttonColor: string }>`
  position: absolute;
  right: 47px;
  top: 55px;
  .triangle {
    right: 10px;
    top: -8px;
    width: 10px;
    background-color: ${props => props.buttonColor};
    height: 30px;
    border-radius: 1px;
    transform: rotate(135deg);
    position: absolute;
  }
`;

const AlarmContainer = styled.div`
  width: 80px;
  height: 100%;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  color: #3e3e3e;
  box-shadow: 0px 6px 6px 0px #00000040;
  background-color: #ffff;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;
`;

export default BellModal;

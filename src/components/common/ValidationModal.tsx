import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { deleteCardApi } from '../../api/board';
import { cardState } from '../../store/cardState';
import { modeState } from '../../store/themeColor';

function ValidationModal({ showValidationModal, cardId }: any) {
  const { buttonColor, hoverColor } = useRecoilValue(modeState);

  const deleteCard = async () => {
    try {
      const res = await deleteCardApi(cardId);
      if (res.status === 200) {
        const res = await deleteCardApi(cardId);
        console.log('삭제성공', res);
        showValidationModal();
      }
    } catch (error) {
      console.log('에러', error);
    }
  };
  return (
    <ModalBg>
      <ModalBox>
        <ModalTitle>게시글 삭제</ModalTitle>
        <ModalContent>게시글을 정말로 삭제하시겠습니까?</ModalContent>
        <ModalBtnBox>
          <ModalCancelBtn
            color={buttonColor}
            hover={hoverColor}
            onClick={showValidationModal}
          >
            취소
          </ModalCancelBtn>
          <ModalOkBtn
            color={buttonColor}
            hover={hoverColor}
            onClick={deleteCard}
          >
            확인
          </ModalOkBtn>
        </ModalBtnBox>
      </ModalBox>
    </ModalBg>
  );
}

const ModalBg = styled.div`
  max-width: 470px;
  width: 100%;
  height: calc(100vh - 110px);
  display: flex;
  top: 60px;
  position: fixed;
  z-index: 9999;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.4);
`;
const ModalBox = styled.div`
  height: 150px;
  width: 340px;
  background-color: white;
  border-radius: 4px;
  padding: 15px 15px 10px 15px;
  box-shadow: rgb(0 0 0 / 9%) 0px 2px 12px 0px;
  animation: 0.4s ease-in-out 0s 1 normal forwards running;
`;
const ModalTitle = styled.div`
  font-size: 24px;
  font-weight: bold;
`;
const ModalContent = styled.div`
  font-size: 14px;
  margin: 15px 0 15px 0;
`;
const ModalBtnBox = styled.div`
  display: flex;
  justify-content: right;
  margin-top: 25px;
  font-weight: bold;
`;
const ModalCancelBtn = styled.div<{ hover: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => props.color};
  width: 67px;
  height: 30px;
  border-radius: 4px;
  cursor: pointer;
  :hover {
    background-color: #0000000d;
  }
`;
const ModalOkBtn = styled.div<{ hover: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffff;
  background-color: ${props => props.color};
  width: 67px;
  height: 30px;
  border-radius: 4px;
  margin-left: 12px;

  cursor: pointer;
  :hover {
    background-color: ${props => props.hover};
  }
`;

export default ValidationModal;

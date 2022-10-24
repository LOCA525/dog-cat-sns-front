import { useEffect, useRef } from 'react';
import styled from 'styled-components';

function Modal({ setModalOpen, showModal, showValidationModal }: any) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: any) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setModalOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => {
      document.removeEventListener('mousedown', handler);
    };
  });

  return (
    <ModalContainer ref={modalRef}>
      <div className="triangle"></div>
      <BtnContainer>
        <ProfileBtn>프로필</ProfileBtn>
        <EditDeleteWrap>
          <EditBtn>수정</EditBtn>
          <DeleteBtn onClick={showValidationModal}>삭제</DeleteBtn>
        </EditDeleteWrap>
        <CancelBtn onClick={showModal}>취소</CancelBtn>
      </BtnContainer>
    </ModalContainer>
  );
}
const ModalContainer = styled.div`
  position: absolute;
  right: 6px;
  top: 40px;
  .triangle {
    right: 12px;
    top: -5px;
    width: 10px;
    background-color: black;
    height: 30px;
    border-radius: 1px;
    transform: rotate(135deg);
    position: absolute;
  }
`;
const BtnContainer = styled.div`
  width: 50px;
  height: 100%;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  color: #4e4e4e;
  box-shadow: 6px 6px 6px 6px #00000040;
  background-color: #ffff;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  padding-top: 7px;
  padding-bottom: 7px;
  z-index: 2;
`;

const ProfileBtn = styled.div`
  width: 100%;
  padding-top: 3px;
  padding-bottom: 3px;
  cursor: pointer;
  :hover {
    background-color: rgb(240, 240, 240);
  }
`;
const EditDeleteWrap = styled.div`
  width: 100%;
`;
const EditBtn = styled.div`
  width: 100%;
  padding-top: 3px;
  padding-bottom: 3px;
  cursor: pointer;
  :hover {
    background-color: rgb(240, 240, 240);
  }
`;
const DeleteBtn = styled.div`
  width: 100%;
  padding-top: 3px;
  padding-bottom: 3px;
  cursor: pointer;
  :hover {
    background-color: rgb(240, 240, 240);
  }
`;
const CancelBtn = styled.div`
  width: 100%;
  padding-top: 3px;
  padding-bottom: 3px;
  cursor: pointer;
  :hover {
    background-color: rgb(240, 240, 240);
  }
`;

export default Modal;
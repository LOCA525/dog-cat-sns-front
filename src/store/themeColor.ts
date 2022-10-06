import { atom } from 'recoil';
import catWallPaper from '../assets/images/cat.png';
import catBtn from '../assets/images/catBtn.png';
import dogWallPaper from '../assets/images/dog.png';
import dogBtn from '../assets/images/dogBtn.png';

// const ThemeCss = () => {
//   // 현재 모드 가져오기
//   const current = useRecoilValue(modeState);
//   // 현재 모드의 버튼색 저장
//   const buttonColor = current.buttonColor;
//   // 현재 모드의 버튼 호버 색 저장
//   const hoverColor = current.hoverColor;
//   // props 형태로 색깔 전달
//   return <ThemeCss buttonColor={buttonColor} hoverColor={hoverColor} />;
// };

// export default ThemeCss;

export const orangeState = atom({
  key: 'oragne',
  default: {
    mode: 'oragne',
    buttonColor: '#ff7f00',
    hoverColor: '#fdbb79',
    toggleBtnImage: dogBtn,
    wallPaper: dogWallPaper,
  },
});

export const blueState = atom({
  key: 'blue',
  default: {
    mode: 'blue',
    buttonColor: '#5271ff',
    hoverColor: '#38b6ff',
    toggleBtnImage: catBtn,
    wallPaper: catWallPaper,
  },
});

export const modeState = atom({
  //디폴드 모드는 오렌지테마
  key: 'isMode',
  default: orangeState,
});

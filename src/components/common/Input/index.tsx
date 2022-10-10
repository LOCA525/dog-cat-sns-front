/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactInputProps, ReactSetState } from '../../../types/reactTypes';

/**
 * Input 폴더 내에 있는 다른 Input 컴포넌트의 부모 컴포넌트 입니다.
 * 중복된 코드를 여기에 정의 합니다. Props 타입은 InputProps를 참고하세요.
 * 간혹 ESLint가 에러로 잘못 판단하는 경우가 있습니다. 파일을 닫았다 다시 열면 됩니다.
 */

interface Props extends ReactInputProps {
  WrappedComponent?: React.FunctionComponent<ReactInputProps>; // Styled Component를 권장합니다.
}

function Input(props: Props) {
  const { WrappedComponent } = props;

  return (
    (WrappedComponent && <WrappedComponent {...props} />) || (
      <input {...props} /> // interface Props에 정의되어 있지 않은 props가 있으면 에러 발생
    )
  );
}

export default Input;

/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactInputProps, ReactSetState } from '../../types/reactTypes';

export declare interface InputProps extends ReactInputProps {
  /** @property styled component등 렌더될 컴포넌트 */
  RenderComponent?: React.FunctionComponent<ReactInputProps>;
  /** @property form 태그 하위에 있을 떄 Enter Submit되는 것을 허용하지 않는 옵션 */
  notEnterSubmit?: boolean;
  /** @property 글자 수 제한 옵션 */
  limit?: number;
  /** @property 유효성 검사 조건 */
  validator?: RegExp | string;
  /** @property 유효성 검사 실패시 메시지 */
  validatorErrorMessage?: string;
  /** @property useState의 SetState Function, 내부 handleChange에서 호출되며,  onChange 핸들러를 지정하면 호출하지 않음 */
  setValue?: ReactSetState<string>;
}

function Input(props: InputProps) {
  const {
    RenderComponent,
    notEnterSubmit,
    setValue,
    limit,
    validator,
    validatorErrorMessage,
    ...restProps
  } = props;

  const { required, onKeyDown, onChange } = restProps;

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    onKeyDown?.(event);
    notEnterSubmit && event.key === 'Enter' && event.preventDefault();
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    // 다른 이벤트 핸들러가 있으면 핸들러를 작동시킨다.
    if (onChange) {
      onChange(event);
      return;
    }

    const target = event.currentTarget;

    // 글자수 제한
    if (limit) {
      setValue?.(target.value.slice(0, limit));
    } else {
      setValue?.(target.value);
    }

    // 필수 옵션, 유효성 검사 및 에러 메시지
    if (required && target.value.length < 1) {
      target.setCustomValidity('이 입력란을 작성하세요.');
    } else if (validator && validatorErrorMessage) {
      const result = RegExp(validator).exec(target.value);
      if (!result) {
        target.setCustomValidity(validatorErrorMessage);
      } else {
        target.setCustomValidity('');
      }
    } else {
      target.setCustomValidity('');
    }
  }

  return (
    (RenderComponent && (
      <RenderComponent
        onKeyDown={handleKeyDown}
        onChange={handleChange}
        {...restProps}
      />
    )) || (
      <input onKeyDown={handleKeyDown} onChange={handleChange} {...restProps} />
    )
  );
}

export default Input;

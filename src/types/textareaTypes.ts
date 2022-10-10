import { ReactSetState, ReactTextAreaProps } from './reactTypes';

export declare interface TextAreaProps<T> {
  // require
  value: T;
  setValue: ReactSetState<T>;

  // optional
  WrappedComponent?: React.FunctionComponent<ReactTextAreaProps>;
  placeholder?: string;
  maxRows?: number;
  limit?: number; // 글자수 제한

  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
}

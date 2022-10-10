import { ReactInputProps, ReactSetState } from './reactTypes';

export declare interface InputProps<T> {
  // required
  type: React.HTMLInputTypeAttribute;

  // generic
  value?: T; // useState의 value
  setValue?: ReactSetState<T>; // useState의 SetState Function

  // optional
  required?: boolean;
  WrappedComponent?: React.FunctionComponent<ReactInputProps>; // styled component ...
  placeholder?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

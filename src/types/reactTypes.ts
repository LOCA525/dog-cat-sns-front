//* React 기본 Props 타입 정의
export declare type ReactInputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;
export declare type ReactTextAreaProps = React.DetailedHTMLProps<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
>;

//* React useState의 SetState 함수 타입 정의
export declare type ReactSetState<T> = React.Dispatch<React.SetStateAction<T>>;

import { InputProps } from '../../../types/inputTypes';
import Input from '.';

function PasswordInput({ setValue, ...props }: InputProps<string>) {
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setValue?.(event.currentTarget.value);
  }

  return <Input onChange={handleChange} {...props} />;
}

export default PasswordInput;

PasswordInput.defaultProps = {
  type: 'password',
};

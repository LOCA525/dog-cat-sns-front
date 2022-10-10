import { InputProps } from '../../../types/inputTypes';
import Input from '.';

function EmailInput({ setValue, ...props }: InputProps<string>) {
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setValue?.(event.currentTarget.value);
  }

  return <Input onChange={handleChange} {...props} />;
}

export default EmailInput;

EmailInput.defaultProps = {
  type: 'email',
};

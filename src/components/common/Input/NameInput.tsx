import { InputProps } from '../../../types/inputTypes';
import Input from '.';

function NameInput({ setValue, ...props }: InputProps<string>) {
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setValue?.(event.currentTarget.value);
  }

  return <Input onChange={handleChange} {...props} />;
}

export default NameInput;

NameInput.defaultProps = {
  type: 'text',
};

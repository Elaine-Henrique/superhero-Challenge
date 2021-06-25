import {InputStyle} from './styles';

const Input = ({
  handleChange,
  placeholder,
  type,
}) => {
  return (
    <InputStyle>
      <input
        type={type}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </InputStyle>
  );
};

export default Input;
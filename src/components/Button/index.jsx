import ButtonStyle from './styles';
import Loading from '../Loading';

const Button = ({
  handleClick,
  disabled,
  text,
  type,
  isLoading,
}) => {
  return (
    <ButtonStyle
      onClick={handleClick}
      type={type}
      isLoading={isLoading}
      disabled={disabled}
    >
      {isLoading ? <Loading /> : <span>{text}</span>}
    </ButtonStyle>
  );
};

export default Button;
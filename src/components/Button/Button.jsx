import {ButtonMore} from './Button.styled';


const Button = ({ onClick }) => {
  return (
    <ButtonMore type="button" onClick={onClick}>
      Load More
    </ButtonMore>
  );
};
export default Button;

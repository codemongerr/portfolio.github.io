import PropTypes from 'prop-types';
import StyledCard from './Card.styled';

function Card({children}) {
  return <StyledCard>{children}</StyledCard>;
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Card;

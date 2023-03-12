import PropTypes from 'prop-types';
import StyledContainer from './Container.styled';

function Container({children, fluid, maxWidth}) {
  return (
    <StyledContainer fluid={fluid} maxWidth={maxWidth}>
      {children}
    </StyledContainer>
  );
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
  fluid: PropTypes.bool,
  maxWidth: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
};

Container.defaultProps = {
  fluid: false,
  maxWidth: undefined,
};

export default Container;

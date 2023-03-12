import PropTypes from 'prop-types';
import Text from './Text';
import StyledHeading from './Heading.styled';

function Heading({as, children, gutterBottom, variant, ...rest}) {
  const textProps = {...rest, paragraph: false, weight: rest.weight || '700'};
  return (
    <StyledHeading as={as} gutterBottom={gutterBottom} variant={variant || as}>
      <Text as="span" color="primary" {...textProps}>
        {children}
      </Text>
    </StyledHeading>
  );
}

Heading.propTypes = {
  as: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']).isRequired,
  children: PropTypes.node.isRequired,
  gutterBottom: PropTypes.bool,
  variant: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
};

Heading.defaultProps = {
  gutterBottom: true,
  variant: undefined,
};

export default Heading;

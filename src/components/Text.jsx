import PropTypes from 'prop-types';
import StyledText from './Text.styled';

function Text({children, ...rest}) {
  return <StyledText {...rest}>{children}</StyledText>;
}

Text.propTypes = {
  as: PropTypes.oneOf(['span', 'div', 'small', 'strong', 'p']),
  color: PropTypes.oneOf([
    'primary',
    'primaryAlt',
    'secondary',
    'secondaryAlt',
    'warning',
    'warningAlt',
    'inherit',
    'default',
  ]),
  children: PropTypes.node.isRequired,
  paragraph: PropTypes.bool,
  italic: PropTypes.bool,
  transform: PropTypes.oneOf(['capitalize', 'lowercase', 'uppercase', 'none']),
  variant: PropTypes.oneOf(['body1', 'body2', 'subtitle1', 'inherit']),
  weight: PropTypes.oneOf([
    '100',
    '300',
    '400',
    '500',
    '600',
    '700',
    '900',
    'inherit',
  ]),
};

Text.defaultProps = {
  as: 'p',
  paragraph: false,
  color: 'inherit',
  italic: false,
  transform: 'none',
  variant: 'inherit',
  weight: 'inherit',
};

export default Text;

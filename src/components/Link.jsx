import PropTypes from 'prop-types';
import Text from './Text';
import StyledLink from './Link.styled';

function Link({
  color,
  children,
  href,
  rel,
  size,
  target,
  underline,
  variant,
  ...rest
}) {
  const linkProps = {color, href, rel, target, underline, variant};
  const textProps = {...rest, variant: size, paragraph: false};
  return (
    <StyledLink {...linkProps}>
      <Text as="span" {...textProps}>
        {children}
      </Text>
    </StyledLink>
  );
}

Link.propTypes = {
  color: PropTypes.oneOf(['inherit', 'scheme']),
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  rel: PropTypes.string,
  size: PropTypes.oneOf(['body1', 'body2', 'subtitle1', 'inherit']),
  target: PropTypes.oneOf(['_blank', '_self', 'none']),
  underline: PropTypes.oneOf(['always', 'hover', 'none']),
  variant: PropTypes.oneOf(['default', 'button']),
};

Link.defaultProps = {
  color: 'inherit',
  rel: undefined,
  size: 'inherit',
  target: 'none',
  underline: 'none',
  variant: 'default',
};

export default Link;

import PropTypes from 'prop-types';
import Text from './Text';
import StyledLink from './Link.styled';

function Link({children, href, rel, target, underline, ...rest}) {
  const linkProps = {href, rel, target, underline};
  const textProps = {...rest, paragraph: false};
  return (
    <StyledLink {...linkProps}>
      <Text as="span" {...textProps}>
        {children}
      </Text>
    </StyledLink>
  );
}

Link.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  rel: PropTypes.string,
  target: PropTypes.oneOf(['_blank', '_self', 'none']),
  underline: PropTypes.oneOf(['always', 'hover', 'none']),
};

Link.defaultProps = {
  rel: undefined,
  target: 'none',
  underline: 'none',
};

export default Link;

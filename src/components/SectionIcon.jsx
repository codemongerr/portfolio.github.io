import PropTypes from 'prop-types';
import StyledSectionIcon, {StyledSectionIconBg} from './SectionIcon.styled';

function SectionIcon({color, children}) {
  return (
    <StyledSectionIcon>
      <StyledSectionIconBg color={color} />
      {children}
    </StyledSectionIcon>
  );
}

SectionIcon.propTypes = {
  color: PropTypes.oneOf([
    'primary',
    'primaryAlt',
    'secondary',
    'secondaryAlt',
    'warning',
    'warningAlt',
  ]).isRequired,
  children: PropTypes.node.isRequired,
};

export default SectionIcon;

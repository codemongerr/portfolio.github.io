import PropTypes from 'prop-types';
import StyledSectionDivider from './SectionDivider.styled';

function SectionDivider({colors, locations}) {
  return <StyledSectionDivider colors={colors} locations={locations} />;
}

SectionDivider.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  locations: PropTypes.arrayOf(PropTypes.number),
};

SectionDivider.defaultProps = {
  locations: [],
};

export default SectionDivider;

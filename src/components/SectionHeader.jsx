import PropTypes from 'prop-types';
import StyledSectionHeader from './SectionHeader.styled';

function SectionHeader({children}) {
  return <StyledSectionHeader>{children}</StyledSectionHeader>;
}

SectionHeader.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SectionHeader;

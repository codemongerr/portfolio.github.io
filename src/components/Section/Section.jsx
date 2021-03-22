import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledSection,
  StyledSectionContent,
  StyledSectionHeading,
} from './Styles';

function Section({children, color, heading, ...rest}) {
  return (
    <StyledSection color={color} {...rest}>
      <StyledSectionHeading>{heading}</StyledSectionHeading>
      <StyledSectionContent>{children}</StyledSectionContent>
    </StyledSection>
  );
}

Section.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf(['blue', 'green', 'orange']).isRequired,
  heading: PropTypes.string.isRequired,
  id: PropTypes.string,
};

Section.defaultProps = {
  id: '',
};

export default Section;

import PropTypes from 'prop-types';
import Heading from './Heading';
import Icon from './Icon';
import SectionHeader from './SectionHeader';
import SectionIcon from './SectionIcon';
import StyledSection, {StyledSectionContent} from './Section.styled';

function Section({color, content, divider, heading, icon, id}) {
  return (
    <StyledSection color={color} id={id}>
      <SectionHeader>
        {icon && (
          <SectionIcon color={color}>
            <Icon name={icon} />
          </SectionIcon>
        )}
        {heading && (
          <Heading
            as="h2"
            color={color}
            transform="capitalize"
            gutterBottom={false}>
            {heading}
          </Heading>
        )}
      </SectionHeader>
      <StyledSectionContent>
        {divider}
        {content}
      </StyledSectionContent>
    </StyledSection>
  );
}

Section.propTypes = {
  divider: PropTypes.node,
  color: PropTypes.string.isRequired,
  content: PropTypes.node.isRequired,
  heading: PropTypes.string,
  icon: PropTypes.string,
  id: PropTypes.string,
};

Section.defaultProps = {
  divider: undefined,
  heading: undefined,
  icon: undefined,
  id: undefined,
};

export default Section;

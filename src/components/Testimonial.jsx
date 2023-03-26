import PropTypes from 'prop-types';
import Card from './Card';
import Icon from './Icon';
import Text from './Text';
import {StyledHighlightText} from './Testimonial.styled';

function Testimonial({description, name, position}) {
  return (
    <Card>
      <Text as="div">
        <Text>
          <StyledHighlightText>
            <Icon name={['fa', 'quote-left']} />
          </StyledHighlightText>{' '}
          {description}{' '}
          <StyledHighlightText>
            <Icon name={['fa', 'quote-right']} />
          </StyledHighlightText>
        </Text>
        <Text>
          <StyledHighlightText>
            - {name}, {position}
          </StyledHighlightText>
        </Text>
      </Text>
    </Card>
  );
}

Testimonial.propTypes = {
  description: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
};

export default Testimonial;

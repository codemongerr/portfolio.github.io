import PropTypes from 'prop-types';
import Card from './Card';
import Icon from './Icon';
import Text from './Text';

function Testimonial({description, name, position}) {
  return (
    <Card>
      <Text as="div">
        <Text>
          <Text as="span" color="secondaryAlt">
            <Icon name={['fa', 'quote-left']} />
          </Text>{' '}
          {description}{' '}
          <Text as="span" color="secondaryAlt">
            <Icon name={['fa', 'quote-right']} />
          </Text>
        </Text>
        <Text color="secondaryAlt">
          - {name}, {position}
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

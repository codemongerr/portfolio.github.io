import PropTypes from 'prop-types';
import Card from './Card';
import Heading from './Heading';
import Link from './Link';
import Text from './Text';
import {
  StyledContentItemInner,
  StyledContentItemLink,
} from './ContentItem.styled';

function ContentItem({description, title, url}) {
  return (
    <Card>
      <StyledContentItemInner>
        {title && (
          <Heading as="h3" variant="h5" color="default" gutterBottom={false}>
            {title}
          </Heading>
        )}
        {description && <Text>{description}</Text>}
        {url && (
          <StyledContentItemLink>
            <Link
              color="scheme"
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              size="body2"
              variant="button">
              view project
            </Link>
          </StyledContentItemLink>
        )}
      </StyledContentItemInner>
    </Card>
  );
}

ContentItem.propTypes = {
  description: PropTypes.string,
  // infoText: PropTypes.string.isRequired,
  title: PropTypes.string,
  url: PropTypes.string,
};

ContentItem.defaultProps = {
  description: undefined,
  title: undefined,
  url: undefined,
};

export default ContentItem;

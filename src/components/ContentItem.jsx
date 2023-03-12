import PropTypes from 'prop-types';
import Card from './Card';
import Heading from './Heading';
import Icon from './Icon';
import Link from './Link';
import Text from './Text';
import {
  StyledContentItemInner,
  StyledContentItemLink,
  StyledContentItemLinkIcon,
} from './ContentItem.styled';

function ContentItem({description, title, url}) {
  return (
    <Card>
      <StyledContentItemInner>
        {title && (
          <Heading as="h3" variant="h6" color="default" gutterBottom={false}>
            {title}
          </Heading>
        )}
        {description && <Text>{description}</Text>}
        {url && (
          <StyledContentItemLink>
            <Link
              href={url}
              target="_blank"
              underline="hover"
              rel="noopener noreferrer"
              variant="body2">
              view project
            </Link>
            <StyledContentItemLinkIcon>
              <Icon name="arrow-right-long" />
            </StyledContentItemLinkIcon>
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

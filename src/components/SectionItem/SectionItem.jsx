import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledSectionItem,
  StyledSectionItemTitle,
  StyledSectionItemDetails,
} from './Styles';

function SectionItem({children, color, infoText, title, url, ...rest}) {
  return (
    <StyledSectionItem color={color} {...rest}>
      <StyledSectionItemTitle>
        {title && url && (
          <a href={url} target="_blank" rel="noreferrer">
            {title}
          </a>
        )}
        {title && !url && <span>{title}</span>}
        {infoText && `(${infoText})`}
      </StyledSectionItemTitle>
      {children && (
        <StyledSectionItemDetails>{children}</StyledSectionItemDetails>
      )}
    </StyledSectionItem>
  );
}

SectionItem.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf(['blue', 'green', 'orange']).isRequired,
  fluid: PropTypes.bool,
  infoText: PropTypes.string,
  title: PropTypes.string,
  url: PropTypes.string,
};

SectionItem.defaultProps = {
  fluid: false,
  infoText: '',
  title: '',
  url: '',
};

export default SectionItem;

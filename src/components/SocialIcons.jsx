import React from 'react';
import PropTypes from 'prop-types';
import {uid} from 'react-uid';
import Icon from './Icon';
import {SocialIconList, SocialIcon} from './SocialIcons.styled';
import icons from '../json/social-icons.json';

function SocialIcons({gutterBottom}) {
  return (
    <SocialIconList gutterBottom={gutterBottom}>
      {icons.map(icon => (
        <SocialIcon
          href={icon.uri}
          target="_blank"
          rel="noreferrer"
          title={icon.title}
          key={uid(icon)}>
          <Icon name={icon.icon} />
        </SocialIcon>
      ))}
    </SocialIconList>
  );
}

SocialIcons.propTypes = {
  gutterBottom: PropTypes.bool,
};

SocialIcons.defaultProps = {
  gutterBottom: false,
};

export default SocialIcons;

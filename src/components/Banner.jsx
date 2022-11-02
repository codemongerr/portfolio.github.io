import React from 'react';
import PropTypes from 'prop-types';
import JSONPretty from 'react-json-pretty';
import {BannerContainer, BannerContent, BannerOverlay} from './Banner.styled';
import SocialIcons from './SocialIcons';

function Banner({info, src}) {
  return (
    <BannerContainer src={src}>
      <BannerOverlay />
      <BannerContent>
        <code>
          <JSONPretty id="personal-info" data={info} space={2} />
        </code>
        <SocialIcons gutterBottom />
      </BannerContent>
    </BannerContainer>
  );
}

Banner.propTypes = {
  info: PropTypes.object.isRequired,
  src: PropTypes.string.isRequired,
};

export default Banner;

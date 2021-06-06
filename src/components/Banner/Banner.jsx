import React from 'react';
import JSONPretty from 'react-json-pretty';
import {BannerContainer, BannerContent, BannerOverlay} from './Style';
import SocialIcons from '../SocialIcons';
import info from '../../abstract/data/info.json';

/**
 * Stateless function component which creates website banner
 *
 * @return Banner component
 */
function Banner() {
  return (
    <BannerContainer>
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

export default Banner;

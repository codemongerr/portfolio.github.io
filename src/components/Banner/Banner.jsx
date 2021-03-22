import React from 'react';
import {uid} from 'react-uid';
import JSONPretty from 'react-json-pretty';
import Icon from '../Icon';
import {
  BannerContainer,
  BannerContent,
  BannerOverlay,
  BannerIconList,
  BannerIcon,
} from './Style';
import bannerIcons from '../../abstract/data/banner-icons.json';
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
          <JSONPretty id="personal-info" data={info} space={4} />
        </code>
        <BannerIconList>
          {bannerIcons.map(bannerIcon => (
            <BannerIcon
              href={bannerIcon.uri}
              target="_blank"
              rel="noreferrer"
              title={bannerIcon.title}
              key={uid(bannerIcon)}>
              <Icon name={bannerIcon.icon} />
            </BannerIcon>
          ))}
        </BannerIconList>
      </BannerContent>
    </BannerContainer>
  );
}

export default Banner;

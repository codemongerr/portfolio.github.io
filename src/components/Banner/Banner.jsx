import React from "react";
import Icon from "../Icon";
import {
  BannerContainer,
  BannerContent,
  BannerOverlay,
  BannerIconList,
  BannerIcon
} from "./Style";

function Banner(props) {
  return (
    <BannerContainer>
      <BannerOverlay />
      <BannerContent>
        <pre itemScope itemType="http://schema.org/Person">
          <code>
            <span>&#123;</span>
            <br />
            <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>&quot;name&quot;: &quot;
            <em itemProp="name">Talwinder Singh</em>&quot;,
            <br />
            <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>&quot;occupation&quot;: &quot;
            <em itemProp="jobTitle">Web Developer</em>&quot;,
            <br />
            <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>&quot;location&quot;: &quot;
            <em itemProp="homeLocation">Auckland, New Zealand</em>&quot;,
            <br />
            <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>&quot;worksFor&quot;: &quot;
            <em itemProp="worksFor">
              <a href="https://www.tomahawk.co.nz" itemProp="url">
                <span itemProp="name">Tomahawk</span>
              </a>
            </em>
            &quot;,
            <br />
            <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>&quot;alumniOf&quot;: &quot;
            <span>
              <em
                itemProp="alumniOf"
                itemScope
                itemType="http://schema.org/Organization"
              >
                <a href="https://www.yoobee.ac.nz" itemProp="url">
                  <span itemProp="name">Yoobee</span>
                </a>
              </em>
            </span>
            &quot;,
            <br />
            <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>&quot;interests&quot;: [<br />
            <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;&nbsp;&nbsp;&nbsp;&quot;
            <em>reactjs</em>&quot;,
            <br />
            <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;&nbsp;&nbsp;&nbsp;&quot;
            <em>agile</em>&quot;,
            <br />
            <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;&nbsp;&nbsp;&nbsp;&quot;
            <em>api</em>&quot;,
            <br />
            <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;&nbsp;&nbsp;&nbsp;&quot;
            <em>code quality</em>&quot;,
            <br />
            <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;&nbsp;&nbsp;&nbsp;&quot;
            <em>semantic web</em>&quot;,
            <br />
            <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;&nbsp;&nbsp;&nbsp;&quot;
            <em>user experience</em>&quot;
            <br />
            <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>]<br />
            <span>&#125;</span>
          </code>
        </pre>
        <BannerIconList>
          <BannerIcon
            href="https://www.linkedin.com/in/codemonger"
            target="_blank"
          >
            <Icon name={["fab", "linkedin"]} />
          </BannerIcon>
          <BannerIcon href="https://github.com/codemongerr" target="_blank">
            <Icon name={["fab", "github"]} />
          </BannerIcon>
          <BannerIcon href="https://twitter.com/codemongerr" target="_blank">
            <Icon name={["fab", "twitter"]} />
          </BannerIcon>
          <BannerIcon href="mailto:retro.nz90@gmail.com">
            <Icon name="envelope" />
          </BannerIcon>
          <BannerIcon
            href="https://stackoverflow.com/users/10160316/codemonger"
            target="_blank"
          >
            <Icon name={["fab", "stack-overflow"]} />
          </BannerIcon>
        </BannerIconList>
      </BannerContent>
    </BannerContainer>
  );
}

export default Banner;

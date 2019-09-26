import styled from "styled-components";
import BannerImage from '../../images/banner.jpg';

export const BannerContainer = styled.div`
  position: relative;
  width: 100%;
  background: url(${BannerImage}) no-repeat center;
  background-size: cover;
  height: 100vh;
  color: ${props => props.theme.color.white}
`;

export const BannerContent = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  font-size: 19px;
  min-height: 90vh;
  overflow: hidden;
  padding: 8rem 75px 0 75px;
  position: relative;
  z-index: 3;
  font-family: ${props => props.theme.fontSerifAlt};

  code {
    font-size: 1.1em;
    line-height: 1.6;
    font-family: "Overpass Mono",Monaco,Consolas,monospace;
  }

  @media (max-width: 750px) {
    font-size: 16px;
    padding: 30vw 5vw 5vw 5vw;
  }
`;

export const BannerOverlay = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
  background-color: rgba(17, 17, 17, 0.2);
  
  &:after {
    background: -webkit-gradient(linear,left top, right top,from(rgba(0,0,0,0.7)),color-stop(60%, rgba(0,0,0,0.8)),to(transparent));
    background: linear-gradient(to right,rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.8) 60%,transparent 100%);
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
  }

  @media (min-width: 751px) {
    &:after {
      background: -webkit-gradient(linear,left top, right top,from(rgba(0,0,0,0.4)),color-stop(60%, rgba(0,0,0,0.5)),to(transparent));
      background: linear-gradient(to right,rgba(0,0,0,0.6) 0%,rgba(0,0,0,0.4) 60%,transparent 100%);
    }
  }
`;

export const BannerIconList = styled.div`
  margin-top: auto;
  margin-bottom: 2rem;
`;

export const BannerIcon = styled.a`
  font-size: 1.7em;
  margin-right: 2rem;
  transition: color 300ms ease;
  color: ${props => props.theme.color.white};

  &:hover {
    color: ${props => props.theme.color.green};
  }
`;
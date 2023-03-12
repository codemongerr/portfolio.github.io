import styled, {css} from 'styled-components';

// Creates the main banner wrapper
export const BannerContainer = styled.div`
  ${({src, theme}) => css`
    position: relative;
    width: 100%;
    background: url(${src}) no-repeat center;
    background-size: cover;
    height: 100vh;
    color: ${theme.color.white};
  `}

  &:after {
    content: '';
    height: 15%;
    width: 100%;
    pointer-events: none;
    display: block;
    background: linear-gradient(
      0deg,
      rgba(17, 24, 39, 1) 17%,
      rgba(17, 17, 17, 0.2) 100%
    );
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: 3;
  }
`;

// Creates the banner content section
export const BannerContent = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  font-size: 16px;
  min-height: 90vh;
  overflow: hidden;
  padding: 3.5rem 75px 0 75px;
  position: relative;
  z-index: 3;
  font-family: ${props => props.theme.fontSerifAlt};

  code {
    font-size: 0.9em;
    line-height: 1.6;
    font-family: 'Overpass Mono', Monaco, Consolas, monospace;

    @media screen and (min-width: 768px) {
      font-size: 1.1em;
    }
  }

  @media (max-width: 750px) {
    font-size: 16px;
    padding: 15vw 5vw 5vw 5vw;
  }
`;

// Creates the banner transparent overlay
export const BannerOverlay = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
  background-color: rgba(17, 17, 17, 0.2);

  &:after {
    background: -webkit-gradient(
      linear,
      left top,
      right top,
      from(rgba(0, 0, 0, 0.7)),
      color-stop(60%, rgba(0, 0, 0, 0.8)),
      to(transparent)
    );
    background: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.7) 0%,
      rgba(0, 0, 0, 0.8) 60%,
      transparent 100%
    );
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
      background: -webkit-gradient(
        linear,
        left top,
        right top,
        from(rgba(0, 0, 0, 0.4)),
        color-stop(60%, rgba(0, 0, 0, 0.5)),
        to(transparent)
      );
      background: linear-gradient(
        to right,
        rgba(0, 0, 0, 0.6) 0%,
        rgba(0, 0, 0, 0.4) 60%,
        transparent 100%
      );
    }
  }
`;

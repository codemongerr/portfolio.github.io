import styled, {css} from 'styled-components';
import {colorMap} from '../utils/helpers';

export const StyledSectionHeading = styled.h2`
  font-size: 20px;
  font-weight: 400;
  -ms-flex-preferred-size: auto;
  flex-basis: auto;
  margin: 0 0 2.5rem;
  padding: 0;
  line-height: 1;
  position: absolute;
  top: calc(38px - 0.5em);
  left: 75px;
  z-index: 1;

  &:after {
    background: #0e0e0e;
    content: '';
    position: absolute;
    top: 0;
    left: -1em;
    bottom: 0;
    right: -1em;
    z-index: -1;
  }

  @media (max-width: 767px) {
    -ms-flex-preferred-size: auto !important;
    flex-basis: auto !important;
    font-size: 1rem;
    padding: 0 !important;
    left: 10vw;
    top: calc(5vw - 0.5em);
  }
`;

export const StyledSection = styled.section`
  ${({color}) => css`
    position: relative;
    outline: 1px solid;
    outline-offset: -38px;
    padding: 80px 75px 40px 75px;
    outline: 1px solid ${colorMap(color)};

    @media screen and (max-width: 767px) {
      display: flex;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -ms-flex-direction: column;
      flex-direction: column;
      outline-offset: -5vw;
      padding: 70px 10vw 30px 10vw;
    }

    ${StyledSectionHeading} {
      color: ${colorMap(color)};
    }
  `}
`;

export const StyledSectionContent = styled.div`
  @media (min-width: 768px) {
    -ms-flex-line-pack: start;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

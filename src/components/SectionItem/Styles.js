import styled, {css} from 'styled-components';
import {colorMap} from '../../utils/helpers';

export const StyledSectionItemTitle = styled.h3`
  color: #808080;
  display: block;
  margin: 0 0 1em;
  font-size: 0.9em;
  font-weight: 400;

  a,
  span {
    margin-right: 0.25em;
    border-bottom: 1px dotted currentColor;
  }
`;

export const StyledSectionItem = styled.div`
  ${({color, fluid}) => css`
    margin: 0;
    padding: 0 0 2em;

    @media screen and (min-width: 768px) {
      ${!fluid &&
      css`
        flex: 0 1 30%;
      `}
    }

    ${fluid &&
    css`
      font-size: 1.2rem;
    `}

    ${StyledSectionItemTitle} {
      a,
      span {
        color: ${colorMap(color)};
      }
    }
  `}
`;

export const StyledSectionItemDetails = styled.div`
  color: #ccc;
  font-size: 0.75em;
  line-height: 1.5;
`;

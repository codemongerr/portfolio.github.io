import styled, {css} from 'styled-components';
// import {colorMap} from '../utils/helpers';

export const StyledText = styled.p`
  ${({color, inline, italic}) => css`
    font-size: 0.8rem;

    ${italic &&
    css`
      font-style: italic;
    `}

    ${inline &&
    css`
      display: inline-flex;
      margin: 0;
    `}

    ${color &&
    css`
      // color: colorMap(color);
    `}
  `}
`;

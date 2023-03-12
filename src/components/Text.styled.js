import styled, {css} from 'styled-components';
import {prepareColorVar} from '../utils/helpers';

const body1 = css`
  font-size: 15px;
`;

const body2 = css`
  font-size: 14px;
`;

const subtitle1 = css`
  font-size: 16px;
`;

const StyledText = styled.p`
  ${({as, color, paragraph, italic, transform, variant, weight}) => css`
    font-size: inherit;
    font-weight: ${weight};
    text-transform: ${transform};
    display: inline-block;

    ${color === 'inherit' &&
    css`
      color: inherit;
    `}

    ${color === 'default' &&
    css`
      color: var(--color-white);
    `}

    ${color !== 'inherit' &&
    color !== 'default' &&
    css`
      color: ${prepareColorVar(color)};
    `}

    ${(as === 'div' || as === 'p') &&
    css`
      display: block;
    `}

    ${italic &&
    css`
      font-style: italic;
    `}

    ${as === 'div' &&
    css`
      > p + p {
        margin: calc(var(--base-gutter) - 5px) 0;
      }
    `}

    ${paragraph &&
    css`
      margin: var(--base-gutter) 0;
      & > :first-child {
        margin-top: 0;
      }
      & > :last-child {
        margin-bottom: 0;
      }
    `}

    ${variant === 'body1' && body1}
    ${variant === 'body2' && body2}
    ${variant === 'subtitle1' && subtitle1}
  `}
`;

export default StyledText;

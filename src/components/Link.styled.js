import styled, {css} from 'styled-components';

const StyledLink = styled.a`
  ${({color, underline, variant}) => css`
    font-family: 'Source Sans Pro', sans-serif;
    text-decoration: none;

    ${color === 'inherit' &&
    css`
      color: inherit;
    `}

    ${color === 'scheme' &&
    css`
      color: var(--color-scheme);
    `}

    ${variant === 'button' &&
    css`
      padding: 4px 10px;
      border-radius: 3px;
      transition: all 150ms linear;

      &:hover {
        background: var(--color-scheme);
        color: #fff;
      }
    `}

    ${variant === 'default' &&
    css`
      border-bottom: 1px solid transparent;
      ${underline === 'always' &&
      css`
        border-bottom: 1px solid;
      `}
      ${underline === 'hover' &&
      css`
        &:hover {
          border-bottom: 1px solid;
        }
      `}
    `}
  `}
`;

export default StyledLink;

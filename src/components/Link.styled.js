import styled, {css} from 'styled-components';

const StyledLink = styled.a`
  ${({underline}) => css`
    font-family: 'Source Sans Pro', sans-serif;
    color: inherit;
    text-decoration: none;
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
`;

export default StyledLink;

import styled, {css} from 'styled-components';

const baseStyles = ({fluid, maxWidth, theme}) => {
  if (!fluid && !maxWidth) {
    return css`
      @media screen and (min-width: ${theme.breakpoints.sm}px) {
        max-width: ${theme.breakpoints.sm}px;
      }
      @media screen and (min-width: ${theme.breakpoints.md}px) {
        max-width: ${theme.breakpoints.md}px;
      }
      @media screen and (min-width: ${theme.breakpoints.lg}px) {
        max-width: ${theme.breakpoints.lg}px;
      }
      @media screen and (min-width: ${theme.breakpoints.xl}px) {
        max-width: ${theme.breakpoints.xl}px;
      }
    `;
  }
  return undefined;
};

const maxWidthStyles = ({fluid, maxWidth, theme}) => {
  if (
    !fluid &&
    maxWidth &&
    Object.keys(theme.breakpoints).includes(maxWidth) &&
    theme.breakpoints[maxWidth] > 0
  ) {
    return css`
      width: ${theme.breakpoints[maxWidth]}px;
    `;
  }
  return undefined;
};

const StyledContainer = styled.div`
  ${({fluid}) => css`
    padding: 0 var(--base-spacing);
    margin: 0 auto;

    ${baseStyles}
    ${maxWidthStyles}

    ${fluid &&
    css`
      width: 100%;
    `}
  `}
`;

export default StyledContainer;

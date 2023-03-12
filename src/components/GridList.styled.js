import styled, {css} from 'styled-components';

const col = num => 12 / num;

const StyledGrid = styled.div`
  display: grid;
  grid-gap: calc(var(--base-spacing) + 5px);

  ${({xs, sm, md, lg, xl, theme}) => css`
    ${!!xs &&
    css`
      grid-template-columns: repeat(${col(xs)}, minmax(240px, 1fr));
    `}

    ${!!sm &&
    css`
      @media screen and (min-width: ${theme.breakpoints.sm}px) {
        grid-template-columns: repeat(${col(sm)}, minmax(240px, 1fr));
      }
    `}

    ${!!md &&
    css`
      @media screen and (min-width: ${theme.breakpoints.md}px) {
        grid-template-columns: repeat(${col(md)}, minmax(240px, 1fr));
      }
    `}

      ${!!lg &&
    css`
      @media screen and (min-width: ${theme.breakpoints.lg}px) {
        grid-template-columns: repeat(${col(lg)}, minmax(240px, 1fr));
      }
    `}

      ${!!xl &&
    css`
      @media screen and (min-width: ${theme.breakpoints.xl}px) {
        grid-template-columns: repeat(${col(xl)}, minmax(240px, 1fr));
      }
    `}
  `}
`;

export const StyledGridItem = styled.div`
  > div {
    height: 100%;
  }
`;

export default StyledGrid;

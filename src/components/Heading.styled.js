import styled, {css} from 'styled-components';

const h1 = css`
  font-size: 28px;
  @media screen and (min-width: 768px) {
    font-size: 40px;
  }
`;

const h2 = css`
  font-size: 24px;
  @media screen and (min-width: 768px) {
    font-size: 32px;
  }
`;

const h3 = css`
  font-size: 24px;
  @media screen and (min-width: 768px) {
    font-size: 28px;
  }
`;

const h4 = css`
  font-size: 22px;
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`;

const h5 = css`
  font-size: 20px;
`;

const h6 = css`
  font-size: 16px;
`;

const StyledHeading = styled.h2`
  ${({gutterBottom, variant}) => css`
    font-family: 'Source Sans Pro', sans-serif;
    margin: 0;
    padding: 0;

    ${gutterBottom &&
    css`
      margin-bottom: var(--base-gutter);
    `}

    ${variant === 'h1' && h1}
    ${variant === 'h2' && h2}
    ${variant === 'h3' && h3}
    ${variant === 'h4' && h4}
    ${variant === 'h5' && h5}
    ${variant === 'h6' && h6}
  `}
`;

export default StyledHeading;

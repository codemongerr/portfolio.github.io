import styled, {css} from 'styled-components';
import {prepareColorVar} from '../utils/helpers';

const StyledSection = styled.section`
  ${({color}) => css`
    --color-scheme: ${prepareColorVar(color)};
    position: relative;
    margin: 20px 0 60px 0;

    & ::selection {
      background-color: var(--color-scheme);
    }
  `}
`;

export const StyledSectionContent = styled.div`
  margin: calc(var(--base-gutter) * 2) 0;

  @media screen and (min-width: 768px) {
    padding-left: 85px;
  }
`;

export default StyledSection;

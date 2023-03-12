import styled, {css} from 'styled-components';
import {decimalToPercentage, isArray} from '../utils/helpers';

const makeLinearGradient = ({colors, locations}) => {
  if (isArray(colors)) {
    const values = colors.map((color, i) =>
      locations[i] ? `${color} ${decimalToPercentage(locations[i])}%` : color
    );

    return css`
      background: linear-gradient(${values.join(', ')});
    `;
  }
  return undefined;
};

const SectionDivider = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
    position: absolute;
    left: 28px;
    top: -15px;
    bottom: -45px;
    width: 3px;
    ${makeLinearGradient}
  }
`;

export default SectionDivider;

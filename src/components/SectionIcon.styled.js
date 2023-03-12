import styled, {css} from 'styled-components';
import {prepareColorVar} from '../utils/helpers';

const StyledSectionIcon = styled.span`
  font-size: 22px;
  display: inline-flex;
  padding: 0;
  margin: 22px 40px 20px 15px;
  background-color: var(--bg-main);
  border-radius: 50%;
  color: var(--color-white);
  width: 30px;
  height: 30px;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const StyledSectionIconBg = styled.span`
  ${({color}) => css`
    display: inline-flex;
    background-color: ${prepareColorVar(color)};
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 40px;
    height: 40px;
    filter: blur(13px);
  `}
`;

export default StyledSectionIcon;

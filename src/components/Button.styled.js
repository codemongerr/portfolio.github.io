import styled, {css} from 'styled-components';

// Simple styled button component
const StyledButton = styled.button`
  display: inline-block;
  font-size: 16px;
  background-color: transparent;
  border: none;
  text-decoration: none;
  cursor: pointer;
  padding: 0 25px;
  height: 51px;
  line-height: 51px;
  white-space: nowrap;
  text-align: center;
  text-transform: uppercase;
  min-width: 200px;
  letter-spacing: 1px;
  font-family: ${props => props.theme.fontSerif};
  font-weight: 700;
  transition: all 250ms ease-in-out;
  ${props =>
    props.variant === 'ghost' &&
    css`
      border: 1px solid;
      border-color: inherit;
      color: inherit;

      &:hover {
        background-color: ${props => props.theme.color.white};
        border: 1px solid ${props => props.theme.color.white};
        color: ${props => props.theme.color.black};
      }
    `}
  ${props =>
    props.variant === 'ghost-green' &&
    css`
      border: 1px solid ${props => props.theme.color.green};
      color: ${props => props.theme.color.green};

      &:hover {
        background-color: ${props => props.theme.color.green};
        color: ${props => props.theme.color.white};
      }
    `}
`;
export default StyledButton;

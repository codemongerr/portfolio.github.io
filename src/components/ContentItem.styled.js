import styled from 'styled-components';

export const StyledContentItemInner = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const StyledContentItemLinkIcon = styled.span`
  display: inline-flex;
  transition: all 200ms linear;
  opacity: 0;
  transform: translateX(0px);
`;

export const StyledContentItemLink = styled.div`
  color: var(--color-scheme);
  margin-top: auto;
  display: inline-flex;
  align-items: center;

  > a:hover ~ ${StyledContentItemLinkIcon} {
    opacity: 1;
    transform: translateX(5px);
  }
`;

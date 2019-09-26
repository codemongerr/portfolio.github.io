import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  background: -moz-linear-gradient(bottom, transparent 0%, rgba(0, 0, 0, 0.6) 100%);
  background: -webkit-linear-gradient(bottom, transparent 0%, rgba(0, 0, 0, 0.6) 100%);
  background: linear-gradient(to top, transparent 0%, rgba(0, 0, 0, 0.6) 100%);
  height: 70px;
  padding: 0 15px;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 999;
`;

function Header(props) {
return(
  <StyledHeader></StyledHeader>
)
}

export default Header;
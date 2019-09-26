import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { StyledIcon } from "./Style";

library.add(fas, fab);

function Icon(props) {
  const { name } = props;
  return (
    name && (
      <StyledIcon>
        <FontAwesomeIcon icon={name} />
      </StyledIcon>
    )
  );
}

export default Icon;

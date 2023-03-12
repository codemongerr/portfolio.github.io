import PropTypes from 'prop-types';
import {library} from '@fortawesome/fontawesome-svg-core';
import {fas} from '@fortawesome/free-solid-svg-icons';
import {fab} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {StyledIcon} from './Icon.styled';

library.add(fas, fab);

function Icon({name}) {
  return (
    name && (
      <StyledIcon>
        <FontAwesomeIcon icon={name} />
      </StyledIcon>
    )
  );
}

Icon.propTypes = {
  name: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
};

export default Icon;

import {uid} from 'react-uid';
import PropTypes from 'prop-types';
import StyledGrid, {StyledGridItem} from './GridList.styled';

function GridList({data, renderItem, ...rest}) {
  return (
    <StyledGrid {...rest}>
      {data.map(item => (
        <StyledGridItem key={uid(item)}>{renderItem(item)}</StyledGridItem>
      ))}
    </StyledGrid>
  );
}

GridList.propTypes = {
  data: PropTypes.array.isRequired,
  renderItem: PropTypes.func.isRequired,
  xs: PropTypes.number,
  sm: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number,
  xl: PropTypes.number,
};

GridList.defaultProps = {
  xs: undefined,
  sm: undefined,
  md: undefined,
  lg: undefined,
  xl: undefined,
};

export default GridList;

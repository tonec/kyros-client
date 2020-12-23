import React from 'react';
import PropTypes, { string, bool, number } from 'prop-types';
import BaseGrid from '@material-ui/core/Grid';
import { childrenType } from '../../types';

function Grid({
  children,
  container,
  spacing,
  justify,
  direction,
  alignItems,
  item,
  xs,
  sm,
  md,
  lg,
  xl,
  className,
}) {
  if (container) {
    return (
      <BaseGrid
        container={container}
        spacing={spacing}
        justify={justify}
        direction={direction}
        alignItems={alignItems}
        className={className}
      >
        {children}
      </BaseGrid>
    );
  }

  return (
    <BaseGrid
      item={item}
      xs={xs}
      sm={sm}
      md={md}
      lg={lg}
      xl={xl}
      className={className}
    >
      {children}
    </BaseGrid>
  );
}

Grid.propTypes = {
  children: childrenType.isRequired,
  container: PropTypes.bool,
  spacing: PropTypes.number,
  justify: PropTypes.string,
  direction: PropTypes.string,
  alignItems: PropTypes.string,
  item: PropTypes.bool,
  xs: PropTypes.oneOfType([string, bool, number]),
  sm: PropTypes.oneOfType([string, bool, number]),
  md: PropTypes.oneOfType([string, bool, number]),
  lg: PropTypes.oneOfType([string, bool, number]),
  xl: PropTypes.oneOfType([string, bool, number]),
  className: PropTypes.string,
};

Grid.defaultProps = {
  container: false,
  spacing: null,
  justify: null,
  direction: null,
  alignItems: null,
  item: false,
  xs: false,
  sm: false,
  md: false,
  lg: false,
  xl: false,
  className: '',
};

export default Grid;

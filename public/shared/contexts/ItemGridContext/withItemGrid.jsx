import React from 'react';
import ItemGridContext from './item-grid-context';

const withItemGrid = (Component) => {
  const C = props => (
    <ItemGridContext.Consumer>
      {
          contextProps => <Component {...props} contextItemGrid={contextProps} />
        }
    </ItemGridContext.Consumer>
  );

  C.displayName = `withItemGrid(${Component.displayName || Component.name})`;
  C.WrappedComponent = Component;
  return C;
};

export default withItemGrid;

import React from 'react';
import ItemGridContext from './item-grid-context';

const withItemGrid = Component => props => (
  <ItemGridContext.Consumer>
    {
      contextProps => <Component {...props} contextItemGrid={contextProps} />
    }
  </ItemGridContext.Consumer>
);

export default withItemGrid;

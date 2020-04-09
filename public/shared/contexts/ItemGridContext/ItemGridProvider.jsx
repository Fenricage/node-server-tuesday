import React from 'react';
import ItemGridContext from './item-grid-context';

const ItemGridProvider = ({ children, value }) => (
  <ItemGridContext.Provider value={value}>
    {children}
  </ItemGridContext.Provider>
);

export default ItemGridProvider;

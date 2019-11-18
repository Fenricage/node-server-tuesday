import React from 'react';
import cs from 'classnames';
import ItemGridUnit from '../ItemGridUnit/ItemGridUnit';
import './ItemGridView.scss';

const ItemGridView = ({ data, className }) => {
  return (
    <section className={cs({
      'item-grid': true,
      [`item-grid_${className}`]: className,
    })}>
      {
        data.map(dataItem => (
          <ItemGridUnit
            key={dataItem.get('_id')}
            dataItem={dataItem}
          />
        ))
      }
    </section>
  );
};

export default ItemGridView;

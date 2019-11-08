import React from 'react';
import ItemGridUnit from '../ItemGridUnit/ItemGridUnit';
import './ItemGridView.scss';

const ItemGridView = ({ data }) => {
  return (
    <section className="item-grid">
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

import React  from 'react';
import './ItemGridUnitView.scss';


const ItemGridUnitView = ({ dataItem, viewComponent: ViewComponent }) => {
  return (
    <section className="item-grid-unit">
      <ViewComponent />
    </section>
  );
}

export default ItemGridUnitView;

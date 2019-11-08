import React, { Component } from 'react';
import ItemGridUnitView from '../ItemGridUnitView/ItemGridUnitView';
import { itemGridContext, withItemGrid } from '../../contexts';
import EntryBadge from '../../../components/home/EntryBadge/EntryBadge';
import './ItemGridUnit.scss';

const gridComponents = {
  EntryBadge,
};


class ItemGridUnit extends Component {


  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.dataItem.equals(nextProps.dataItem)) {
      return false;
    }
    return true;
  }


  render() {
    const { dataItem, contextItemGrid } = this.props;
    const { viewComponent } = contextItemGrid;


    // выбираем view компонент который попадет в гриды
    const Component = gridComponents[viewComponent];

    // заполняем пропсами из грида и контекста
    const GridComponent = () => (
      <Component
        context={contextItemGrid}
        dataItem={dataItem}
      />
    );

    return (
      <ItemGridUnitView
        dataItem={dataItem}
        viewComponent={GridComponent}
      />
    );
  }

}

export default withItemGrid(ItemGridUnit);

import React, { Component } from 'react';
import { itemGridContext, withItemGrid } from '../../contexts';
import EntryBadge from '../../../components/home/EntryBadge/EntryBadge';
import BlogEntryBadge from '../../../components/blog/BlogEntryBadge/BlogEntryBadge';
import AdminAttachmentEntryBadge from '../../../components/admin/AdminAttachmentEntryBadge/AdminAttachmentEntryBadge';
import './ItemGridUnit.scss';

const gridComponents = {
  EntryBadge,
  BlogEntryBadge,
  AdminAttachmentEntryBadge,
};


class ItemGridUnit extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.dataItem.equals(nextProps.dataItem)) {
      return false;
    }
    return true;
  }


  render() {

    const {
      dataItem,
      contextItemGrid,
      ...other
    } = this.props;

    const { viewComponent } = contextItemGrid;

    // выбираем view компонент который попадет в гриды
    const Component = gridComponents[viewComponent];

    // заполняем пропсами из грида и контекста
    const GridComponent = () => (
      <Component
        context={contextItemGrid}
        dataItem={dataItem}
        {...other}
      />
    );

    return (
      <div className="item-grid-unit">
        <GridComponent
          dataItem={dataItem}
        />
      </div>
    );
  }

}

export default withItemGrid(ItemGridUnit);

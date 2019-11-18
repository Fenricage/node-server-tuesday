import React, { Component } from 'react';
import ItemGridView from '../ItemGridView/ItemGridView';
import { withItemGrid } from '../../contexts/index';
import './ItemGrid.scss';

class ItemGrid extends Component {

  render() {
    const { data, contextItemGrid: { className } } = this.props;

    return (
      <ItemGridView
        data={data}
        className={className}
      />
    );
  }

}

export default withItemGrid(ItemGrid);

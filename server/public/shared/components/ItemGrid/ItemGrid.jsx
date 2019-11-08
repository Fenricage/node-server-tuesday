import React, { Component } from 'react';
import ItemGridView from '../ItemGridView/ItemGridView'
import './ItemGrid.scss';

class ItemGrid extends Component {

  render() {
    const { data } = this.props;
    return (
      <ItemGridView
        data={data}
      />
    );
  }

}

export default ItemGrid;

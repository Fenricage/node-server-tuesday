import React, { Component } from 'react';
import { withItemGrid } from '../../contexts/index';
import './ItemGrid.scss';
import cs from 'classnames';
import ItemGridUnit from '../ItemGridUnit/ItemGridUnit';

class ItemGrid extends Component {

  shouldComponentUpdate(nextProps, nextState) {

    if (!this.props.data.equals(nextProps.data)) {
      return true;
    }

    if (!this.props.contextItemGrid.className !== nextProps.contextItemGrid.className) {
      return true;
    }

    return false;

  }

  render() {
    const {
      data,
      contextItemGrid: {
        className,
      },
      ...other
    } = this.props;

    return (
      <section className={cs({
        'item-grid': true,
        [`${className}`]: className,
      })}
      >
        {
          data.map((dataItem) => (
            <ItemGridUnit
              key={dataItem.get('_id')}
              dataItem={dataItem}
              {...other}
            />
          ))
        }
      </section>
    );
  }

}

export default withItemGrid(ItemGrid);

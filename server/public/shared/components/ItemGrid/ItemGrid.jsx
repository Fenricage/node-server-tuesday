import React, { Component } from 'react';
import { withItemGrid } from '../../contexts/index';
import './ItemGrid.scss';
import cs from 'classnames';
import ItemGridUnit from '../ItemGridUnit/ItemGridUnit';

class ItemGrid extends Component {


  // TODO(@fenricage) оптимихировать ререндер только если разные new List()
  // TODO добавть CSSTRAansition roup animation
  shouldComponentUpdate(nextProps, nextState) {

    console.log('this className', this.props.contextItemGrid.className)
    console.log('next className', nextProps.contextItemGrid.className)
    // console.log('equal data', this.props.data.equals(nextProps.data))

    if (!this.props.data.equals(nextProps.data)) {
      return true;
    };

    if (!this.props.contextItemGrid.className !== nextProps.contextItemGrid.className) {
      return true;
    };


    return false;

  }


  render() {
    const {
      data,
      contextItemGrid: {
        className,
      },
    } = this.props;



    console.log("RENDER ITEM GRIRd")

    return (
      <section className={cs({
        'item-grid': true,
        [`${className}`]: className,
      })}
      >
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
  }

}

export default withItemGrid(ItemGrid);

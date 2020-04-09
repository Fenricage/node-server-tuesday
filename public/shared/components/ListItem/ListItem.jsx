import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Immutable, { List } from 'immutable';
import './ListItem.scss';
import { withArticle } from '../../contexts/index';
import ListItemView from '../ListItemView/ListItemView';

class ListItem extends Component {

  render() {
    const {
      isDeletingItems,
      item,
    } = this.props;
    const isCurrentItemDeleting = isDeletingItems.includes(item.get('_id'));

    return (
      <ListItemView
        {...this.props}
        isCurrentItemDeleting={isCurrentItemDeleting}
      />
    );
  }

}

ListItem.propTypes = {
  isDeletingItems: PropTypes.oneOfType([
    PropTypes.instanceOf(Array),
    PropTypes.instanceOf(Immutable.Iterable),
  ]),
};

ListItem.defaultProps = {
  isDeletingItems: new List([]),
};

export default withArticle(ListItem);

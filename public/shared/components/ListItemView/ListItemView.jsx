import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import RemoveCrossIcon from '../../icons/RemoveCrossIcon/RemoveCrossIcon';
import Button from '../Button/Button';
import './ListItemView.scss';

const ListItemView = ({
  onDeleteItem,
  isCurrentItemDeleting,
  item,
  pathname,
}) => {
  return (
    <section className="list-item">
      <Link href={`${pathname}/${item.get('_id')}`}>
        <a
          className="list-item__link"
        >
          {item.get('title')}
        </a>
      </Link>
      <Button
        className="list-item__delete"
        type="button"
        loaderClassName="type-cross-button"
        isLoading={isCurrentItemDeleting}
        onClick={onDeleteItem(item.get('_id'))}
      >
        <RemoveCrossIcon />
      </Button>
    </section>
  );
}

ListItemView.propTypes = {
  onDeleteItem: PropTypes.func,
};

ListItemView.defaultProps = {
  onDeleteItem: () => () => console.error('You are forgot to pass func onDeleteItem to ListItemView'),
};

export default ListItemView;

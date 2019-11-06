import React from 'react';
import PropTypes from 'prop-types';
// import { withRouter, Link } from 'react-router-dom';
import Link from 'next/link';
import RemoveCrossIcon from '../../icons/RemoveCrossIcon/RemoveCrossIcon';
import Button from '../Button/Button';
import './ListItemView.scss';

const ListItemView = ({
  match,
  onDeleteItem,
  isCurrentItemDeleting,
  item,
}) => (
  <section className="list-item">
    {/* <Link className="list-item__link" to={`${match.path}/${item.get('_id')}`}> */}
    {/*  {item.get('title')} */}
    {/* </Link> */}
    <Link href={`/admin/articles/${item.get('_id')}`}>
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

ListItemView.propTypes = {
  onDeleteItem: PropTypes.func,
};

ListItemView.defaultProps = {
  onDeleteItem: () => () => console.error('You are forgot to pass func onDeleteItem to ListItemView'),
};

// export default withRouter(ListItemView);
export default ListItemView;

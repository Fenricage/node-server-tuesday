import React from 'react';
import RemoveCrossIcon from '../../icons/RemoveCrossIcon/RemoveCrossIcon';
import './Tag.scss';

const Tag = (
  {
    tag,
    onClick,
  },
) => (
  <div
    className="tag"
    role="button"
    onClick={onClick}
  >
    <span
      className="tag__text"
    >
      {tag.get('code')}
    </span>

  </div>
);

export default Tag;

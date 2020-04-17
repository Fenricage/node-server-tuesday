import React from 'react';
import './AdminTag.scss';

const AdminTag = (
  {
    tag: {
      code,
      namespaces,
      _id,
    },
    tag,
    onClick,
    onDelete,
    isDeletingTags,
  },
) => {
  const isCurrentTagDeleting = isDeletingTags
    .some(tagId => tagId === tag.get('_id'));

  return (
    <div
      className="admin-tag"
    >
      <span
        className="admin-tag__text"
        role="button"
        onClick={onClick}
      >
        {tag.get('code')}
      </span>
      {onDelete && (
        <span
          className="admin-tag__delete"
          role="button"
          onClick={onDelete(tag.get('_id'))}
        >
          {isCurrentTagDeleting ? 'deleting...' : 'delete'}
        </span>
      )}

    </div>
  );
};

export default AdminTag;

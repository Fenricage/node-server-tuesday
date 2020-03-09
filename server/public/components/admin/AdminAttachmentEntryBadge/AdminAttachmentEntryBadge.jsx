import React from 'react';
import { CLIENT_URL } from '../../../shared/utils/config';
import { deleteAttachment } from '../../../shared/api/utils/attachments';
import './AdminAttachmentEntryBadge.scss';

const AdminAttachmentEntryBadge = ({ dataItem }) => {
  return (
    <div className="admin-attachment-entry-badge">
      <img
        src={`${CLIENT_URL}/${dataItem.get('img_url')}`}
        alt=""
        className="admin-attachment-entry-badge__img"
      />
      <button onClick={() => {
        deleteAttachment(dataItem.get('_id'));
      }}
      >
        удалить
      </button>
    </div>
  );
};

export default AdminAttachmentEntryBadge;

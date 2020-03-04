import React from 'react';
import { CLIENT_URL } from '../../../shared/utils/config';
import './AdminAttachmentEntryBadge.scss';

const AdminAttachmentEntryBadge = ({ dataItem }) => {
  return (
    <div className="admin-attachment-entry-badge">
      <img
        src={`${CLIENT_URL}/${dataItem.get('img_url')}`}
        alt=""
        className="admin-attachment-entry-badge__img"
      />
    </div>
  );
};

export default AdminAttachmentEntryBadge;

import React, { useEffect, useState, useReducer } from 'react';
import { ItemGridProvider } from '../../../shared/contexts/index';
import ItemGrid from '../../../shared/components/ItemGrid/ItemGrid';
import './AllAttachmentsAdminPage.scss';
import { Map, fromJS } from 'immutable';
import { deleteAttachment, getAttachments } from '../../../shared/api/utils/attachments';
import cs from 'classnames';

const initialState = fromJS({
  attachments: {
    data: {},
    isLoaded: false,
  },
});

function reducer(state, action) {
  switch (action.type) {

    case 'setAttachmentsData': {
      return state
        .merge({
          attachments: Map({
            data: action.payload,
            isLoaded: true,
          }),
        });
    }

    case 'setAttachmentDeleting': {
      const attachmentsRecords = state.getIn([ 'attachments', 'data', 'records' ]);
      const neededIndex = attachmentsRecords.findIndex(record => record.get('_id') === action.payload.id);
      const updatedRecords = attachmentsRecords.update(neededIndex, record => record.update('isDeleting', () => action.payload.status));

      return state.updateIn([ 'attachments', 'data', 'records' ], () => updatedRecords);
    }

    case 'deleteAttachment': {
      const attachmentsRecords = state.getIn([ 'attachments', 'data', 'records' ]);
      const neededIndex = attachmentsRecords.findIndex(record => record.get('_id') === action.payload.id);
      return state.updateIn([ 'attachments', 'data', 'records' ], records => records.delete(neededIndex));
    }

    default:
      throw new Error();
  }
}

const AllAttachmentsAdminPage = () => {
  const [ state, dispatch ] = useReducer(reducer, initialState);
  const attachmentsData = state.getIn([ 'attachments', 'data' ]);
  const isAttachmentsLoaded = state.getIn([ 'attachments', 'isLoaded' ]);

  useEffect(() => {
    const fetchAttachments = async () => {
      const attachments = await getAttachments();
      dispatch({ type: 'setAttachmentsData', payload: fromJS(attachments) });
    };
    fetchAttachments();
  }, [ dispatch ]);

  const handleDeleteAttachment = id => async () => {
    dispatch({ type: 'setAttachmentDeleting', payload: { id, status: true } });
    await deleteAttachment(id);
    dispatch({ type: 'deleteAttachment', payload: { id } });
  };

  if (!isAttachmentsLoaded) {
    return <p>loaded...</p>;
  }

  return (
    <div className="all-attachments-admin-page">
      <ItemGridProvider value={{
        viewComponent: 'AdminAttachmentEntryBadge',
      }}
      >
        <ItemGrid
          data={attachmentsData.get('records')}
          deleteAttachment={handleDeleteAttachment}
        />
      </ItemGridProvider>
    </div>
  );
};

export default AllAttachmentsAdminPage;

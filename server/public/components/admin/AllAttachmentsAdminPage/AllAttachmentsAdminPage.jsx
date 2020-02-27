import React, { useEffect, useState, useReducer } from 'react';
import { ItemGridProvider } from '../../../shared/contexts/index';
import ItemGrid from '../../../shared/components/ItemGrid/ItemGrid';
import { API_BROWSER } from '../../../shared/constants/api';
import api from '../../../shared/api/index';
import './AllAttachmentsAdminPage.scss';
import cs from "classnames";

const initialState = {
  attachments: {
    data: {},
    isLoaded: false,
  },
};

function reducer(state, action) {
  switch (action.type) {
    case 'setAttachmentsData':
      return {
        ...state,
        attachments: {
          ...state.attachments,
          data: action.payload,
          isLoaded: true,
        },
      };
    // case 'replaceItemRevisionData':
    //
    //   // при отсутствии параметра в match роутера, забираем sequence из item дефолтной ревизии
    //   const sequence = Number(action.payload) || state.item.data.revision.sequence;
    //
    //   const selectedRevision = state.revisions.data.records
    //     .find((record) => sequence === record.sequence);
    //
    //   return {
    //     ...state,
    //     item: {
    //       ...state.item,
    //       data: {
    //         ...state.item.data,
    //         revision: selectedRevision,
    //       },
    //     },
    //   };
    default:
      throw new Error();
  }
}

const AllAttachmentsAdminPage = () => {

  const [state, dispatch] = useReducer(reducer, initialState);

  const {
    attachments: {
      data: attachmentsData,
      isLoaded: isAttachmentsLoaded,
    },
  } = state;

  useEffect(() => {
    const fetchAttachments = async () => {
      const attachments = await api.get(API_BROWSER).attachments.getAll();
      dispatch({ type: 'setAttachmentsData', payload: attachments });
    };

    fetchAttachments();

  }, [dispatch]);

  if (!isAttachmentsLoaded) {
    return <p>loaded...</p>;
  }

  return (
    <div className="all-attachments-admin-page">

      {attachmentsData.records.map((attachmentRecord) => {
        return (
          <p key={attachmentRecord._id}>{attachmentRecord._id}</p>
        )
      })}

    </div>
  );
};

export default AllAttachmentsAdminPage;

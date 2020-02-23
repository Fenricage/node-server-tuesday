import React, { useEffect, useState, useReducer } from 'react';
import { API_BROWSER } from '../../../shared/constants/api';
import api from '../../../shared/api/index';
import './AllAttachmentsAdminPage.scss';

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

  const { attachments } = state;

  useEffect(() => {
    const fetchAttachments = async () => {
      const attachments = await api.get(API_BROWSER).attachments.getAll();
      console.log('attachments', attachments) 
    };

    fetchAttachments()
  }, [dispatch]);

  return (
    <div className="all-attachments-admin-page">
      att compoentne
    </div>
  );
};

export default AllAttachmentsAdminPage;

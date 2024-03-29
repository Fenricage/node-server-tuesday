import React, { useReducer, useState } from 'react';
import ReactMarkdown from 'react-markdown/with-html';
import { Collapse } from 'react-collapse';
import { fromJS } from 'immutable';
import { CLIENT_URL } from '../../../shared/utils/config';
import Modal from '../../../shared/components/Modal/Modal';
import CodeBlock from '../../../shared/components/CodeBlock/CodeBlock';
import Times from '../../../shared/icons/Times/Times';
import CollapseToggle from '../../../shared/components/CollapseToggle/CollapseToggle';
import './AdminAttachmentEntryBadge.scss';

const theme = {
  collapse: 'admin-attachment-entry-badge-modal__collapse',
  content: 'admin-attachment-entry-badge-modal__collapse-content',
};

function init(data) {
  return fromJS({
    data,
    isModalOpen: false,
  });
}

function reducer(state, action) {
  switch (action.type) {

    case 'setModalOpen': {
      return state.update('isModalOpen', value => action.payload);
    }
    default: {
      throw new Error();
    }
  }
}

const AdminAttachmentEntryBadge = ({
  dataItem,
  deleteAttachment,
}) => {
  const [ state, dispatch ] = useReducer(reducer, dataItem, init);
  const [ isCodeBlockOpened, setCodeBlockOpened ] = useState(false);
  const isModalOpen = state.get('isModalOpen');

  const handleClickOpenModal = () => {
    dispatch({ type: 'setModalOpen', payload: true });
  };

  const handleClickCloseModal = () => {
    dispatch({ type: 'setModalOpen', payload: false });
  };

  const prettiedModelJSON = JSON.stringify(dataItem.toJS(), null, 4);
  const forMarkdownJSON = `\`\`\`json\n${prettiedModelJSON}\n\`\`\``;


  return (
    <>
      <div className="admin-attachment-entry-badge">
        <img
          src={`${CLIENT_URL}/${dataItem.get('img_url')}`}
          alt=""
          className="admin-attachment-entry-badge__img"
        />
        <button onClick={deleteAttachment(dataItem.get('_id'))}>
          {dataItem.get('isDeleting') ? '...' : 'удалить'}
        </button>
      </div>
      <button onClick={handleClickOpenModal}>show all data</button>
      <Modal
        open={isModalOpen}
        closeNode={<Times />}
        className="admin-attachment-entry-badge-modal"
        onClose={handleClickCloseModal}
      >
        <div className="admin-attachment-entry-badge-modal__inner">
          <CollapseToggle
            isOpen={isCodeBlockOpened}
            className="admin-attachment-entry-badge__collapse"
            bemClassName="admin-attachment-entry-badge-collapse"
            isOpenText="Hide this model's code"
            isCloseText="Show this model's code"
            onClick={() => setCodeBlockOpened(prevState => !prevState)}
          />
          <Collapse isOpened={isCodeBlockOpened} theme={theme}>
            <ReactMarkdown
              source={forMarkdownJSON || ''}
              escapeHtml={false}
              renderers={{ code: CodeBlock }}
            />
          </Collapse>
        </div>
      </Modal>
    </>
  );
};

export default AdminAttachmentEntryBadge;

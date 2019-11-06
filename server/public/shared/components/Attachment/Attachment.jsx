import React, { Component } from 'react';
import { fromJS } from 'immutable';
import {
  Field,
} from 'redux-form/immutable';
import FileInput from '../FileInput/FileInput';
import './Attachment.scss';
import api from '../../api/index';

class Attachment extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  onChangeFileHandler = callbackHandler => async (filesData) => {
    const { type } = this.props;
    const file = filesData.target.files[0];
    const formData = new FormData();
    formData.append('image', file);
    // создаем
    const response = await api.utils.createAttachment(formData, type);
    // получаем
    const imageData = await api.utils.getAttachment(response._id);
    // пишем в форму
    callbackHandler(fromJS(imageData));
  }

  render() {
    const { name } = this.props;
    return (
      <section>
        <Field
          name={name}
          component={FileInput}
          onChangeFileHandler={this.onChangeFileHandler}
          type="file"
        />
      </section>
    );
  }

}

export default Attachment;

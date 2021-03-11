import React, { Component } from 'react';
import { fromJS } from 'immutable';
import {
  Field,
} from 'redux-form/immutable';
import FileInput from '../FileInput/FileInput';
import './Attachment.scss';
import api from '../../api';
import { API_SERVER, API_BROWSER } from '../../constants/api';

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
    const response = await api.get(API_BROWSER).utils.createAttachment(formData, type);
    // получаем
    const imageData = await api.get(API_BROWSER).utils.getAttachment(response._id);
    // пишем в форму
    callbackHandler(fromJS(imageData));
  };

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

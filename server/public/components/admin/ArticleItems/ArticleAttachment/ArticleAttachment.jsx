import React, { Component } from 'react';
import {
  Field,
} from 'redux-form/immutable';
import { fromJS } from 'immutable';
import FileInput from '../../../../shared/components/FileInput/FileInput';
import './ArticleAttachment.scss';
import api from '../../../../shared/api/index';


class ArticleAttachment extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  onChangeFileHandler = callbackHandler => async (filesData) => {
    const file = filesData.target.files[0];
    const formData = new FormData();
    formData.append('image', file);
    // создаем
    const response = await api.utils.createAttachment(formData, 'article');
    // получаем
    const imageData = await api.utils.getAttachment(response._id);
    callbackHandler(fromJS(imageData));
  }

  render() {
    const { field } = this.props;
    return (
      <section>
        <Field
          name={`${field}.value`}
          component={FileInput}
          onChangeFileHandler={this.onChangeFileHandler}
          type="file"
        />
      </section>
    );
  }

}

export default ArticleAttachment;

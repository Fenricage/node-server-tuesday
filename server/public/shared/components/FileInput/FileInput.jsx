import React, { Component, Fragment } from 'react';
import './FileInput.scss';


class FileInput extends Component {

  render() {
    const {
      input: {
        onChange,
        onBlur,
        testHandler,
        value,
        ...inputProps
      },
      onChangeFileHandler,
      disableImage,
    } = this.props;

    return (
      <section className="file-input">
        {!disableImage && value && (
          <img src={value.get('img_url')} alt="" />
        )}
        <input
          onChange={onChangeFileHandler(onChange)}
          type="file"
          {...inputProps}
        />
      </section>
    );
  }

}

export default FileInput;

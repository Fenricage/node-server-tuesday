import React from 'react';
import uuid from 'uuid';
import './Textarea.scss';

const Textarea = ({
  title,
  required,
  placeholder,
  autofocus,
  input,
  meta,
  ...other
}) => {
  const uid = uuid.v4();
  return (
    <section className="textarea-form-row">
      <label htmlFor={uid} className="textarea-form-row__title">{title}</label>
      <section className="textarea-form-row__wrap">
        <section className="textarea-form-row__field">
          <textarea
            {...input}
            {...other}
            id={uid}
            className="textarea-form-row__textarea"
            autoFocus={autofocus}
            placeholder={placeholder || title || ''}
          />
        </section>
      </section>
    </section>
  );
};

export default Textarea;

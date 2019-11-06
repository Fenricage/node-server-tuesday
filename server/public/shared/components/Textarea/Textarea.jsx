import React from 'react';
import './Textarea.scss';

const Textarea = ({
  title,
  required,
  placeholder,
  autofocus,
  input,
  meta,
  ...other
}) => (
  <section className="b-form-row">
    <h3>{title}</h3>
    <section className="b-form-row__wrap">
      <section className="b-form-row__field">
        <textarea
          {...input}
          {...other}
          autoFocus={autofocus}
          placeholder={placeholder || title || ''}
        />
      </section>
    </section>
  </section>
);

export default Textarea;

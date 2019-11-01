import React, { Component } from 'react';
import cs from 'classnames';

const Input = ({
  title,
  required,
  placeholder,
  autofocus,
  input,
  meta,
  className,
  optionalButtonText,
  optionalButtonHandler,
  ...other
}) => (
  <section className={cs({
    'b-form-row': true,
    [`${className}`]: className,
  })}
  >
    <section className="b-form-row__title-box">
      <h3>{title}</h3>
      {
        optionalButtonText && optionalButtonHandler ?
          (
            <button
              type="button"
              onClick={optionalButtonHandler}
            >
              {optionalButtonText}
            </button>
          ) :
          null
      }
    </section>
    <section className="b-form-row__wrap">
      <section className="b-form-row__field">
        <input
          className="b-form-row__input"
          {...input}
          {...other}
          autoFocus={autofocus}
          placeholder={placeholder || title || ''}
        />
      </section>
    </section>
  </section>
);

export default Input;

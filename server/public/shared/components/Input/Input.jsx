import React, { Component } from 'react';
import cs from 'classnames';
import './Input.scss';

const Input = ({
  title,
  required,
  placeholder,
  autoFocus,
  input,
  meta,
  className,
  optionalButtonText,
  optionalButtonHandler,
  ...other
}) => (
  <section className={cs({
    [`${className}`]: className,
    'input-form-row': true,
  })}
  >
    <section className="input-form-row__title-box">
      <h3 className="input-form-row__title">{title}</h3>
      {
        optionalButtonText && optionalButtonHandler ?
          (
            <button
              type="button"
              className="input-form-row__optional-button"
              onClick={optionalButtonHandler}
            >
              {optionalButtonText}
            </button>
          ) :
          null
      }
    </section>
    <section className="input-form-row__wrap">
      <section className="input-form-row__field">
        <input
          className="input-form-row__input"
          {...input}
          {...other}
          placeholder={placeholder || title || ''}
        />
      </section>
    </section>
  </section>
);

export default Input;

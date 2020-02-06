import React, { Component } from 'react';
import uuid from 'uuid';
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
}) => {
  const uid = uuid.v4();
  return (
    <section className={cs({
      [`${className}`]: className,
      'input-form-row': true,
    })}
    >
      <section className="input-form-row__title-box">
        <label htmlFor={uid} className="input-form-row__title">{title}</label>
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
            id={uid}
            {...input}
            {...other}
            placeholder={placeholder || title || ''}
          />
        </section>
      </section>
    </section>
  )
};

export default Input;

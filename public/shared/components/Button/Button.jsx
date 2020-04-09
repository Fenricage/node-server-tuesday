import React from 'react';
import cs from 'classnames';
import Loader from '../Loader/Loader';
import './Button.scss';

const Button = ({
  children,
  className,
  loaderClassName = 'type-button',
  isLoading,
  ...other
}) => (
  <button
    className={cs({
      button: true,
      [`${className}`]: className,
    })}
    {...other}
  >
    {isLoading ? <Loader className={loaderClassName} /> : children}
  </button>
);

export default Button;

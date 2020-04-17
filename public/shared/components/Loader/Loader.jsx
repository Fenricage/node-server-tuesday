import React from 'react';
import cs from 'classnames';
import './Loader.scss';

const Loader = ({className}) => (
  <div className={cs({
    loader: true,
    [`loader_${className}`]: className,
  })}>
    <svg className="loader__circular" viewBox="25 25 50 50">
      <circle
        className="loader__path"
        cx="50"
        cy="50"
        r="20"
        fill="none"
        strokeWidth="2"
        strokeMiterlimit="10"
      />
    </svg>
  </div>
);

export default Loader;

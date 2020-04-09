import React from 'react';
import cs from 'classnames';
import './Angle.scss';

const Angle = ({ className, modClassName }) => (
  <svg
    className={cs({
      angle: true,
      [`${className}`]: className,
      [`angle_${modClassName}`]: modClassName,
    })}
    width="13"
    height="8"
    viewBox="0 0 13 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.469727 1.18719L1.53039 0.126535L6.65691 5.25306L11.7834 0.126535L12.8441 1.18719L6.65691 7.37438L0.469727 1.18719Z"
      fill="black"
    />
  </svg>
);

export default Angle;

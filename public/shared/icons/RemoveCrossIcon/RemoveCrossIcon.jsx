import React from 'react';
import './RemoveCrossIcon.scss';

const RemoveCrossIcon = () => (
  <svg width="27" height="27" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle className="accent-svg-element" cx="13.5" cy="13.5" r="9" transform="rotate(45 13.5 13.5)" stroke="#000" />
    <path className="secondary-svg-element" stroke="#000" d="M9.611 17.389l7.778-7.778M9.611 9.611l7.778 7.778" />
  </svg>
);

export default RemoveCrossIcon;

import React from 'react';
import cs from 'classnames';
import Angle from '../../icons/Angle/Angle';
import './CollapseToggle.scss';

const CollapseToggle = (props) => {

  const {
    className,
    isOpen,
    onClick,
    isOpenText,
    isCloseText,
  } = props;

  const renderChildren = () => {
    return (
      <>
        <span className="collapse-toggle__text">
          {isOpen ? isOpenText : isCloseText}
        </span>
        <Angle className="collapse-toggle__angle"/>
      </>
    );
  };

  return (
    <button
      className={cs('collapse-toggle', className, {
        'collapse-toggle_is-open': isOpen,
      })}
      onClick={onClick}
    >
      {renderChildren()}
    </button>
  );
};

export default CollapseToggle;

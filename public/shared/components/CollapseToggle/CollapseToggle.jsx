import React from 'react';
import cs from 'classnames';
import Angle from '../../icons/Angle/Angle';
import './CollapseToggle.scss';

const CollapseToggle = (props) => {

  const {
    className,
    bemClassName,
    isOpen,
    onClick,
    isOpenText,
    isCloseText,
  } = props;

  const renderChildren = () => {
    return (
      <>
        <span className={cs('collapse-toggle__text', {
          [`${bemClassName}__text`]: bemClassName,
        })}>
          {isOpen ? isOpenText : isCloseText}
        </span>
        <Angle className={cs('collapse-toggle__angle', {
          [`${bemClassName}__angle`]: bemClassName,
        })}
        />
      </>
    );
  };

  return (
    <button
      className={cs('collapse-toggle', className, {
        'collapse-toggle_is-open': isOpen,
        [`${className}`]: className,
        [`${bemClassName}`]: bemClassName,
        [`${bemClassName}_is-open`]: bemClassName && isOpen,
      })}
      onClick={onClick}
    >
      {renderChildren()}
    </button>
  );
};

export default CollapseToggle;

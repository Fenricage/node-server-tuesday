import React, { useState, useEffect, useRef } from 'react';
import cs from 'classnames';
import Link from 'next/link';
import './Logo.scss';

const Logo = ({ className }) => {
  const [ logoText, setLogoText ] = useState('high_develop {}');
  const [ isAnimating, setAnimating ] = useState(false);

  const actionTimer = useRef(null);
  if (!isAnimating) {
    return (
      <Link
        href="/"
      >
        <a
          className={cs({
            logo: true,
            [`${className}`]: className,
          })}
          onMouseOver={(e) => {
            // 1-2
            // const weightValue = Math.ceil(Math.random() * 2);
            // actionTimer.current = setTimeout(() => {
            //
            // }, 0);
            console.log('OVER, SET TRUE ANIMATING');
            setAnimating(true);
          }}
          onMouseLeave={() => {
            // setTimeout(actionTimer.current);
          }}
        >
          <span className="logo__text">{logoText}</span>
        </a>
      </Link>
    );
  }

  return (
    <Link
      href="/"
    >
      <a
        className={cs({
          logo: true,
          [`${className}`]: className,
        })}
        // onMouseOver={(e) => {
        //   // 1-2
        //   // const weightValue = Math.ceil(Math.random() * 2);
        //   actionTimer.current = setTimeout(() => {
        //
        //   }, 0);
        // }}
        onMouseLeave={() => {
          // setTimeout(actionTimer.current);
          console.log('LEAVE, SET FALSE ANIMATING');
          setAnimating(false);
        }}
      >
        <span className="logo__text">{logoText}</span>
      </a>
    </Link>
  );
};

export default Logo;

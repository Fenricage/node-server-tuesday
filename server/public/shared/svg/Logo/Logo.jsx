import React, {
  useState, useEffect, useLayoutEffect, useRef,
} from 'react';
import cs from 'classnames';
import Link from 'next/link';
import './Logo.scss';

const DEFAULT_LOGO = 'test []';


const Logo = ({ className }) => {
  const [ logoText, setLogoText ] = useState('test {}');
  const [ isAnimating, setAnimating ] = useState(false);

  const actionTimer = useRef(null);
  const logoRef = useRef(null);

  useLayoutEffect(() => {
    if (isAnimating) {
      actionTimer.current = setInterval(() => {
        setLogoText(Math.random());
      }, 300);
    } else {
      clearInterval(actionTimer.current);
      setLogoText(DEFAULT_LOGO);
    }
  }, [ isAnimating ]);

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
          // actionTimer.current = setInterval(() => {
          //   console.log('isAnimating', isAnimating);
          // }, 1000);
          setAnimating(true);
        }}
        onMouseLeave={() => {
          setAnimating(false);
          // clearInterval(actionTimer.current);
        }}
        ref={logoRef}
      >
        <span className="logo__text">{logoText}</span>
      </a>
    </Link>
  );
};

export default Logo;

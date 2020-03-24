import React, {
  useState, useEffect, useLayoutEffect, useRef,
} from 'react';
import cs from 'classnames';
import Link from 'next/link';
import './Logo.scss';

const DEFAULT_LOGO = 'test []';

const actionVariations = new Map([
  [
    'js-interval-animation',
    (actionTimer, setLogoText) => {
      actionTimer.current = setInterval(() => {
        setLogoText(Math.random());
      }, 300);

      return () => {
        clearInterval(actionTimer.current);
        setLogoText(DEFAULT_LOGO);
      };
      //  пускай вернет функцию которая отменит все, вызовем ее на CWUnmount!
    },
  ],
]);

// console.log('actionVariations.keys()', Array.from(actionVariations.keys()))


const Logo = ({ className }) => {
  const [ logoText, setLogoText ] = useState('test {}');
  const [ isAnimating, setAnimating ] = useState(false);

  const actionTimer = useRef(null);
  const logoRef = useRef(null);

  useLayoutEffect(() => {
    let cancelAction = null;
    if (isAnimating) {
      const action = actionVariations.get('js-interval-animation');
      cancelAction = action(actionTimer, setLogoText);
    }
    return () => {
      if (isAnimating && cancelAction) {
        cancelAction();
      }
    };
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

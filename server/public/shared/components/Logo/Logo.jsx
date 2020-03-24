import React, {
  useState, useEffect, useLayoutEffect, useRef,
} from 'react';
import cs from 'classnames';
import Link from 'next/link';
import './Logo.scss';

const DEFAULT_LOGO = 'test //:';


const mathRandomAnimate = (actionTimer, setLogoText) => {
  actionTimer.current = setInterval(() => {
    setLogoText(Math.random());
  }, 300);

  // cancel function
  return () => {
    clearInterval(actionTimer.current);
    setLogoText(DEFAULT_LOGO);
  };
};

const mathIncrementAnimate = (actionTimer, setLogoText) => {

  let incrementingValue = 1;

  actionTimer.current = setInterval(() => {
    setLogoText(DEFAULT_LOGO + incrementingValue++);
  }, 300);

  // cancel function
  return () => {
    clearInterval(actionTimer.current);
    setLogoText(DEFAULT_LOGO);
  };
};

const faceSymbolsAnimate = (actionTimer, setLogoText) => {

  // let incrementingValue = 1;

  // actionTimer.current = setInterval(() => {
  //   setLogoText(DEFAULT_LOGO + incrementingValue++);
  // }, 300);

  setLogoText('test {}');
  const faces = [ '{-_-}', '{*_*}' ];
  let i = 0;
  actionTimer.current = setInterval(() => {
    const face = faces[i];
    setLogoText(`test ${face}`);
    i ? --i : ++i;
  }, 500);

  // cancel function
  return () => {
    clearInterval(actionTimer.current);
    setLogoText(DEFAULT_LOGO);
  };
};


const animateActionsArr = [ mathRandomAnimate, mathIncrementAnimate, faceSymbolsAnimate ];

const actionVariations = new Map([
  [
    'js-interval-animation',
    (actionTimer, setLogoText) => {
      // select rando function
      const randomNumBetweenActionSize = Math.floor(Math.random() * animateActionsArr.length);
      const randomAnimateAction = animateActionsArr[randomNumBetweenActionSize];
      // return randomAnimateAction(actionTimer, setLogoText);
      return faceSymbolsAnimate(actionTimer, setLogoText);
    },
  ],
]);

// console.log('actionVariations.keys()', Array.from(actionVariations.keys()))


const Logo = ({ className }) => {
  const [ logoText, setLogoText ] = useState(DEFAULT_LOGO);
  const [ isAnimating, setAnimating ] = useState(false);

  // one timer, one node ref
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

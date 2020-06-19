import React, {
  useState, useEffect, useLayoutEffect, useRef, forwardRef,
} from 'react';
import cs from 'classnames';
import Link from 'next/link';
import './Logo.scss';

// const DEFAULT_LOGO = 'high_develop //:';
const DEFAULT_LOGO = 'logo_name //:';


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

  setLogoText('logo_name {*_*}');
  const faces = [ '{-_-}', '{*_*}' ];
  let i = 0;
  actionTimer.current = setInterval(() => {
    const face = faces[i];
    setLogoText(`logo_name ${face}`);
    i ? --i : ++i;
  }, 250);

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


const Logo = ({ className, active }) => {
  const [ logoText, setLogoText ] = useState(DEFAULT_LOGO);
  const [ isAnimating, setAnimating ] = useState(false);

  // one timer, one node ref
  const actionTimer = useRef(null);

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

  const handleMouseOverLogo = () => {
    // actionTimer.current = setInterval(() => {
    //   console.log('isAnimating', isAnimating);
    // }, 1000);
    setAnimating(true);
  };

  const handleMouseLeaveLogo = () => {
    setAnimating(false);
    // clearInterval(actionTimer.current);
  };

  return (
    <Link
      href="/"
    >
      <a
        className={cs({
          logo: true,
          [`${className}`]: className,
        })}
        onMouseOver={active ? handleMouseOverLogo : null}
        onMouseLeave={active ? handleMouseLeaveLogo : null}
      >
        <span className="logo__text">{logoText}</span>
      </a>
    </Link>
  );
};

export default Logo;

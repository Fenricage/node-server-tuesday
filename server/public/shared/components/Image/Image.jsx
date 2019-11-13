import React, { useEffect, useState, useRef } from 'react';
import cs from 'classnames';
import './Image.scss';

// content: "";
// display: block;
// padding-bottom: 145%;

const Image = ({ className, ...other }) => {

  const [loadedState, setLoaded] = useState(false);
  const img = useRef(null)
  console.log('img', img)
  return (
    <img
      className={cs({
        [`${className}`]: className,
      })}
      ref={img}
      // style={{ visibility: loadedState ? 'visible' : 'hidden' }}
      onLoad={() => setLoaded(true)}
      {...other}
    />
  );
};

export default Image;

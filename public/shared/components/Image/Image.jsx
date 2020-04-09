import React, { useState, useRef } from 'react';
import cs from 'classnames';
import './Image.scss';

const Image = ({ className, ...other }) => {
  const [ loadedState, setLoaded ] = useState(false);
  const img = useRef(null);

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

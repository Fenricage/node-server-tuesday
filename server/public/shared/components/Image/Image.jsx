import React, { useEffect, useState } from 'react';
import cs from 'classnames';
import './Image.scss';

// content: "";
// display: block;
// padding-bottom: 145%;

const Image = ({ className, ...other }) => {

  const [loadedState, setLoaded] = useState(false);

  return (
    <img
      className={cs({
        [`${className}`]: className,
      })}
      style={{ visibility: loadedState ? 'visible' : 'hidden' }}
      onLoad={() => setLoaded(true)}
      {...other}
    />
  );
};

export default Image;

import React from 'react';

import sprite from './sprite.svg?inline';

export const Icon = ({ type = 'pin' }) => (
  <svg xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' viewBox='0 0 50 50' width='20px' height='20px' fill='white'>
    <use xlinkHref={`${sprite}#${type}`} />
  </svg>
);

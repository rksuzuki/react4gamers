import React from 'react';
import { DEMON_SIZE } from '../../settings/constants';

import './index.css';

const Demon = () => {
  return (
   <div 
    style={{
      backgroundImage: 'url(./assets/DEMON.png)',
      width: DEMON_SIZE,
      height: DEMON_SIZE,
      backgroundRepeat: 'no-repeat',
      animation: 'demon-animation 1s steps(4) infinite',
      position: 'absolute',
      bottom: 48 * 10,
      left: 48 * 6
    }}
   />
  );
}

export default Demon;
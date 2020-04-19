import React from 'react';
import { TILE_SIZE } from '../../settings/constants';

import './index.css';

const Trap = () => {
  return (
   <div 
    style={{
      backgroundImage: 'url(./assets/TRAP.png)',
      width: TILE_SIZE,
      height: 100,
      backgroundRepeat: 'no-repeat',
      animation: 'trap-animation 1s steps(8) infinite',
      position: 'absolute',
      top: 48 * 10,
      left: 48 * 10
    }}
   />
  );
}

export default Trap;
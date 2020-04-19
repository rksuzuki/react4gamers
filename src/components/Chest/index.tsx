import React from 'react';
import { TILE_SIZE } from '../../settings/constants';

import './index.css';

const Chest = () => {
  return (
   <div 
    style={{
      backgroundImage: 'url(./assets/CHEST.png)',
      width: TILE_SIZE,
      height: 100,
      backgroundRepeat: 'no-repeat',
      animation: 'chest-animation 1s steps(3) infinite',
      position: 'absolute',
      top: 48 * 4,
      left: 48 * 6
    }}
   />
  );
}

export default Chest;
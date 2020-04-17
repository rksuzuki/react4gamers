import React, { useState, useEffect } from 'react';
import { TILE_SIZE, HEAD_OFFSET } from '../../settings/constants';

import './index.css';

const miniDemonInicialPosition = {
  x: Math.floor(Math.random() * 19) + 1,
  y: Math.floor(Math.random() * 19) + 1
};

const MiniDemon = () => {
  const [miniDemonPosition, setMiniDemonPosition] = useState(miniDemonInicialPosition);

  return (
   <div 
    style={{
      backgroundImage: 'url(./assets/MINI-DEMON.png)',
      width: TILE_SIZE,
      height: TILE_SIZE + HEAD_OFFSET,
      backgroundRepeat: 'no-repeat',
      animation: 'mini-demon-animation 1s steps(4) infinite',
      position: 'absolute',
      bottom: 48 * miniDemonPosition.x,
      left: 48 * miniDemonPosition.y,
      backgroundPosition: `0 -${TILE_SIZE - HEAD_OFFSET}px`
    }}
   />
  );
}

export default MiniDemon;
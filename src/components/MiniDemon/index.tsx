import React from 'react';
import { TILE_SIZE, HEAD_OFFSET, EDirection } from '../../settings/constants';
import useEnemyMoviment from '../../hooks/useEnemyMoviment';

import './index.css';

const MiniDemon = () => {
  const { enemyPosition, direction } = useEnemyMoviment({x: 10, y: 5});

  return (
   <div 
    style={{
      backgroundImage: 'url(./assets/MINI-DEMON.png)',
      width: TILE_SIZE,
      height: TILE_SIZE + HEAD_OFFSET,
      backgroundRepeat: 'no-repeat',
      animation: 'mini-demon-animation 1s steps(4) infinite',
      position: 'absolute',
      bottom: 48 * enemyPosition.y,
      left: 48 * enemyPosition.x,
      backgroundPosition: `0 -${TILE_SIZE - HEAD_OFFSET}px`,
      transform: `scaleX(${direction === EDirection.RIGHT ? 1 : -1})`
    }}
   />
  );
}

export default MiniDemon;
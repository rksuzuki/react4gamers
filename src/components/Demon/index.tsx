import React from 'react';
import useEnemyMoviment from '../../hooks/useEnemyMoviment';
import { DEMON_SIZE, EDirection } from '../../settings/constants';

import './index.css';

const Demon = () => {
  const { enemyPosition, direction } = useEnemyMoviment({x: 13, y: 5});

  return (
   <div 
    style={{
      backgroundImage: 'url(./assets/DEMON.png)',
      width: DEMON_SIZE,
      height: DEMON_SIZE,
      backgroundRepeat: 'no-repeat',
      animation: 'demon-animation 1s steps(4) infinite',
      position: 'absolute',
      bottom: 48 * enemyPosition.y,
      left: 48 * enemyPosition.x,
      transform: `scaleX(${direction === EDirection.RIGHT ? 1 : -1})`
    }}
   />
  );
}

export default Demon;
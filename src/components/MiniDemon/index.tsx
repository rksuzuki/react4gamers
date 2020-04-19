import React from 'react';
import { TILE_SIZE, HEAD_OFFSET, EDirection } from '../../settings/constants';
import useEnemyMoviment from '../../hooks/useEnemyMoviment';

import './index.css';

interface IProps {
  initialPosition: {
    x: number,
    y: number
  }
};

const MiniDemon = (props: IProps) => {
  const { enemyPosition, direction } = useEnemyMoviment(props.initialPosition);

  return (
   <div 
    style={{
      backgroundImage: 'url(./assets/MINI-DEMON.png)',
      width: TILE_SIZE,
      height: TILE_SIZE + HEAD_OFFSET,
      backgroundRepeat: 'no-repeat',
      animation: 'mini-demon-animation 1s steps(4) infinite',
      position: 'absolute',
      top: 48 * enemyPosition.y,
      left: 48 * enemyPosition.x,
      backgroundPosition: `0 -${TILE_SIZE - HEAD_OFFSET}px`,
      transform: `scaleX(${direction === EDirection.RIGHT ? 1 : -1})`
    }}
   />
  );
}

export default MiniDemon;
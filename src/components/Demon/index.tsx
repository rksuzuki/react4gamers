import React from 'react';
import useEnemyMoviment from '../../hooks/useEnemyMoviment';
import { DEMON_SIZE, EDirection, TILE_SIZE } from '../../settings/constants';

import './index.css';

interface IProps {
  enemyInitialPosition: {
    x: number,
    y: number
  }
};


const Demon = (props: IProps) => {
  const { enemyPosition, direction } = useEnemyMoviment(props.enemyInitialPosition);

  return (
   <div 
    style={{
      backgroundImage: 'url(./assets/DEMON.png)',
      width: DEMON_SIZE,
      height: DEMON_SIZE,
      backgroundRepeat: 'no-repeat',
      animation: 'demon-animation 1s steps(4) infinite',
      position: 'absolute',
      top: TILE_SIZE * enemyPosition.y,
      left: TILE_SIZE * enemyPosition.x,
      transform: `scaleX(${direction === EDirection.RIGHT ? 1 : -1})`
    }}
   />
  );
}

export default Demon;
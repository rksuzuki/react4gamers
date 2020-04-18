import { useState } from 'react';
import useInterval from '@use-it/interval';
import { EDirection } from '../../settings/constants';
import handleNextPosition from '../../contexts/canvas/helpers';

export default function useEnemyMoviment(enemyInitialPosition) {
  const [enemyPosition, setEnemyPosition] = useState(enemyInitialPosition);
  const [direction, setDirection] = useState(EDirection.RIGHT);

  useInterval(function move() {
    const random = Math.floor(Math.random() * 4);
    const directionArray = Object.values(EDirection);
    const randomDirection = directionArray[random];
  
    const nextMoviment = handleNextPosition(randomDirection, enemyPosition);
    setEnemyPosition(nextMoviment);
    setDirection(randomDirection);

  }, 1000);
  
  return {
    enemyPosition,
    direction
  };
}
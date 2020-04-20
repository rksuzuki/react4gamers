import { useState } from 'react';
import useInterval from '@use-it/interval';
import { EDirection } from '../../settings/constants';
import { handleNextPosition, checkValidMoviment } from '../../contexts/canvas/helpers';

export default function useEnemyMoviment(enemyInitialPosition) {
  const [enemyPosition, setEnemyPosition] = useState(enemyInitialPosition);
  const [direction, setDirection] = useState(EDirection.RIGHT);

  useInterval(function move() {
    const random = Math.floor(Math.random() * 4);
    const directionArray = Object.values(EDirection);
    const randomDirection = directionArray[random];
  
    const nextPosition = handleNextPosition(randomDirection, enemyPosition);
    const isValidMoviment = checkValidMoviment(nextPosition);

    if (isValidMoviment) {
    setEnemyPosition(nextPosition);
    setDirection(direction);
    }
  }, 1000);

  return {
    enemyPosition,
    direction
  };
}
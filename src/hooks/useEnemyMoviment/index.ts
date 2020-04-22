import { useState, useContext } from 'react';
import useInterval from '@use-it/interval';
import { EDirection, EWalker } from '../../settings/constants';
import { handleNextPosition, checkValidMoviment } from '../../contexts/canvas/helpers';
import { CanvasContext } from '../../contexts/canvas';

export default function useEnemyMoviment(enemyInitialPosition) {
  const canvasContext = useContext(CanvasContext);
  const [enemyPosition, setEnemyPosition] = useState(enemyInitialPosition);
  const [direction, setDirection] = useState(EDirection.RIGHT);

  useInterval(function move() {
    const random = Math.floor(Math.random() * 4);
    const directionArray = Object.values(EDirection);
    const randomDirection = directionArray[random];

    const { nextPosition, nextMove } = canvasContext.updateCanvas(randomDirection, enemyPosition, EWalker.ENEMY);

    if (nextMove.valid) {
    setEnemyPosition(nextPosition);
    setDirection(randomDirection);
    }
  }, 1000);

  return {
    enemyPosition,
    direction
  };
}
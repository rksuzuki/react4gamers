import React, { useState, useContext } from 'react';
import useEventListener from '@use-it/event-listener';
import { EDirection, EWalker } from '../../settings/constants';
import { CanvasContext } from '../../contexts/canvas';
import { ChestsContext } from '../../contexts/chests';

export default function useHeroMoviment(heroInicialPosition) {
  const chestsContext = useContext(ChestsContext);
  const canvasContext = useContext(CanvasContext);
  const [heroPosition, setHeroPosition] = useState(heroInicialPosition);
  const [direction, setDirection] = useState(EDirection.RIGHT);

  useEventListener('keydown', (event: React.KeyboardEvent<HTMLDivElement>) => {
    const direction = event.key as EDirection;

    if (direction.indexOf('Arrow') === -1) {
      return;
    }

    const { nextPosition, nextMove } = canvasContext.updateCanvas(direction, heroPosition, EWalker.HERO);

    if (nextMove.valid) {
      setHeroPosition(nextPosition);
      setDirection(direction);
    }

    if (nextMove.dead) {
      console.log('você morreu');
    }

    if (nextMove.chest) {
      chestsContext.updateOpenedChests();
    }

  });

  return {
    heroPosition,
    direction
  };
}
import React, { useState, useContext } from 'react';
import useEventListener from '@use-it/event-listener';
import { EDirection, EWalker, EStatusMessage } from '../../settings/constants';
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
      setTimeout(() => {
        alert(EStatusMessage.DEAD);
      });

      window.location.reload();
    }

    if (nextMove.chest) {
      chestsContext.updateOpenedChests(nextPosition);
    }

    if (chestsContext.totalChests === chestsContext.openedChests.total && nextMove.door) {
      setTimeout(() => {
        alert(EStatusMessage.WIN);
      });

      window.location.reload();
    }

  });

  return {
    heroPosition,
    direction
  };
}
import React, { useState } from 'react';
import useEventListener from '@use-it/event-listener';
import { EDirection } from '../../settings/constants';
import handleNextPosition from '../../contexts/canvas/helpers';

export default function useHeroMoviment(heroInicialPosition) {
  const [heroPosition, setHeroPosition] = useState(heroInicialPosition);
  const [direction, setDirection] = useState(EDirection.RIGHT);

  useEventListener('keydown', (event: React.KeyboardEvent<HTMLDivElement>) => {
    const direction = event.key as EDirection;

    if (direction.indexOf('Arrow') === -1) {
      return;
    }

    const nextPosition = handleNextPosition(direction, heroPosition);
    setHeroPosition(nextPosition);
    setDirection(direction);
  });

  return {
    heroPosition,
    direction
  };
}
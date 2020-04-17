import React, { useState } from 'react';
import useEventListener from '@use-it/event-listener';
import { TILE_SIZE, HEAD_OFFSET } from '../../settings/constants';

import './index.css';

const heroInicialPosition = {
  x: 1,
  y: 2
};

const Hero = () => {
  const [heroPosition, setHeroPosition] = useState(heroInicialPosition);
  const [direction, setDirection] = useState('RIGHT');

  useEventListener('keydown', (event: any) => {
      const sqm = 1;
      const movements = {
        ArrowUp() {
          setHeroPosition({ x: heroPosition.x, y: heroPosition.y + sqm });
        },
        ArrowDown() {
          setHeroPosition({ x: heroPosition.x, y: heroPosition.y - sqm });
        },
        ArrowLeft() {
          setHeroPosition({ x: heroPosition.x - sqm , y: heroPosition.y});
          setDirection('LEFT');
        },
        ArrowRight() {
          setHeroPosition({ x: heroPosition.x  + sqm , y: heroPosition.y });
          setDirection('RIGHT');
        },
      };

      const keyPressed = event.key;
      const heroMovement = movements[keyPressed];
      
      if (heroMovement) {
        heroMovement(keyPressed);
      }
  });

  return (
   <div 
    style={{
      backgroundImage: 'url(./assets/HERO.png)',
      width: TILE_SIZE,
      height: TILE_SIZE + HEAD_OFFSET,
      backgroundRepeat: 'no-repeat',
      animation: 'hero-animation 1s steps(4) infinite',
      position: 'absolute',
      bottom: 48 * heroPosition.y,
      left: 48 * heroPosition.x,
      backgroundPosition: `0 -${TILE_SIZE - HEAD_OFFSET}px`,
      transform: `scaleX(${direction === 'RIGHT' ? 1 : -1})`
    }}
   />
  );
}

export default Hero;
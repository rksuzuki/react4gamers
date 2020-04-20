import React from 'react';
import { TILE_SIZE, HEAD_OFFSET, EDirection } from '../../settings/constants';
import useHeroMoviment from '../../hooks/useHeroMoviment';

import './index.css';

interface IProps {
  heroInicialPosition: {
    x: number,
    y: number
  }
}

const Hero = (props: IProps) => {
  const { heroPosition, direction } = useHeroMoviment(props.heroInicialPosition);

  return (
   <div 
    style={{
      backgroundImage: 'url(./assets/HERO.png)',
      width: TILE_SIZE,
      height: TILE_SIZE + HEAD_OFFSET,
      backgroundRepeat: 'no-repeat',
      animation: 'hero-animation 1s steps(4) infinite',
      position: 'absolute',
      top: TILE_SIZE * heroPosition.y - HEAD_OFFSET,
      left: TILE_SIZE * heroPosition.x,
      backgroundPosition: `0 -${TILE_SIZE - HEAD_OFFSET}px`,
      transform: `scaleX(${direction === EDirection.RIGHT ? 1 : -1})`,
      zIndex: 1
    }}
   />
  );
}

export default Hero;
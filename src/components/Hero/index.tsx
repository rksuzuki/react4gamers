import React from 'react';
import { TILE_SIZE } from '../../settings/constants';

import './index.css';

const Hero = () => {
  return (
   <div 
    style={{
      backgroundImage: 'url(./assets/HERO.png)',
      width: TILE_SIZE,
      height: 100,
      backgroundRepeat: 'no-repeat',
      animation: 'hero-animation 1s steps(4) infinite',
      position: 'absolute',
      bottom: 48 * 4,
      left: 48 * 6
    }}
   />
  );
}

export default Hero;
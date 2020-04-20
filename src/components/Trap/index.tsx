import React from 'react';
import { TILE_SIZE } from '../../settings/constants';

import './index.css';

interface IProps {
  initialPosition: {
    x: number,
    y: number
  }
}

const Trap = (props: IProps) => {
  return (
   <div 
    style={{
      backgroundImage: 'url(./assets/TRAP.png)',
      width: TILE_SIZE,
      height: 100,
      backgroundRepeat: 'no-repeat',
      animation: 'trap-animation 1s steps(8) infinite',
      position: 'absolute',
      top: TILE_SIZE * props.initialPosition.y,
      left: TILE_SIZE * props.initialPosition.x
    }}
   />
  );
}

export default Trap;
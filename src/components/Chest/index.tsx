import React, { useContext } from 'react';
import { TILE_SIZE } from '../../settings/constants';

import './index.css';
import { ChestsContext } from '../../contexts/chests';

interface IProps {
  initialPosition: {
    x: number,
    y: number
  }
}

const Chest = (props: IProps) => {
  const chestsContext = useContext(ChestsContext);
  const shouldAnimate = chestsContext.openedChests.positions.find((position) => {
    const match = props.initialPosition.y === position.y && props.initialPosition.x === position.x;
    
    return match;
  });

  const animation = shouldAnimate ? 'chest-animation 1s steps(2) forwards' : null;

  return (
   <div 
    style={{
      backgroundImage: 'url(./assets/CHEST.png)',
      width: TILE_SIZE,
      height: 100,
      backgroundRepeat: 'no-repeat',
      animation: animation,
      position: 'absolute',
      top: TILE_SIZE * props.initialPosition.y,
      left: TILE_SIZE * props.initialPosition.x
    }}
   />
  );
}

export default Chest;
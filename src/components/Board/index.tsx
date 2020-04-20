import React from 'react';

import Hero from '../Hero';
import MiniDemon from '../MiniDemon';
import Demon from '../Demon';
import Chest from '../Chest';
import Trap from '../Trap';
import Debugger from '../Debugger';
import { GAME_SIZE } from '../../settings/constants';
import { ECanvas, canvas } from '../../contexts/canvas/helpers';

function getCanvasMap() {
  const array = [];

  for (let y = 0; y < canvas.length; y++) {
    const canvasY = canvas[y];

    for (let x = 0; x < canvasY.length; x++) {
      const canvasYX = canvasY[x];

      const position = {x, y};
      const text = canvas[y][x] || canvasYX;
      const key = `${x}-${y}`;

      if (text === ECanvas.HERO) {
        array.push(<Hero key={key} heroInicialPosition={position}/>);
      }
      
      if (text === ECanvas.MINI_DEMON) {
        array.push(<MiniDemon key={key} enemyInitialPosition={position}/>);
      }

      if (text === ECanvas.DEMON) {
        array.push(<Demon key={key} enemyInitialPosition={position}/>);
      }

      if (text === ECanvas.CHEST) {
        array.push(<Chest key={key} initialPosition={position}/>);
      }

      if (text === ECanvas.TRAP) {
        array.push(<Trap key={key} initialPosition={position}/>);
      }
    }
  }

  return array;
}

const elements = getCanvasMap();

const Board = () => {
  return (
    <div>

      {elements}
      <Debugger />
      <img 
        src="./assets/tileset.gif" 
        alt="board" 
        width={GAME_SIZE} 
        height={GAME_SIZE}
      />
    </div>
  );
}

export default Board;
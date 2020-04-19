import React from 'react';

import Hero from '../Hero';
import MiniDemon from '../MiniDemon';
import Demon from '../Demon';
import Chest from '../Chest';
import Trap from '../Trap';
import Debugger from '../Debugger';
import { GAME_SIZE } from '../../settings/constants';

const Board = () => {
  return (
    <div>
      <Hero />
      <MiniDemon initialPosition={{x: 5, y: 5}}/>
      <MiniDemon initialPosition={{x: 15, y: 15}}/>
      <Demon />
      <Chest />
      <Trap />
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
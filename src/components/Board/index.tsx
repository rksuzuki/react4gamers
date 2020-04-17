import React from 'react';

import Hero from '../Hero';
import MiniDemon from '../MiniDemon';
import Demon from '../Demon';
import Chest from '../Chest';
import Trap from '../Trap';
import { GAME_SIZE } from '../../settings/constants';

const Board = () => {
  return (
    <div>
      <Hero />
      <MiniDemon />
      <Demon />
      <Chest />
      <Trap />
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
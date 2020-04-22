import React, { createContext, useState } from 'react';

interface IProps {
  children: React.ReactNode;
}

export const ChestsContext = createContext({
  totalChests: 0,
  openedChests: {
    total: 0,
    positions: []
  },
  updateOpenedChests: () => null
});

export function ChestsProvider(props: IProps) {
  const [chestsState, updateChestsState] = useState({
    totalChests: 2,
    openedChests: {
      total: 0,
      positions: []
    },
    updateOpenedChests: () => {
      console.log('chests');
    }
  })

  return (
  <ChestsContext.Provider value={chestsState}>
    {props.children}
  </ChestsContext.Provider>
  );
}
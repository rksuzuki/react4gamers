import { EDirection } from "../../settings/constants";

export function handleNextPosition (direction, position) {
  const sqm = 1;

  switch (direction) {
    case EDirection.LEFT:
      return { x: position.x - sqm, y: position.y };

    case EDirection.RIGHT:
      return { x: position.x + sqm, y: position.y };

    case EDirection.UP:
      return { x: position.x, y: position.y - sqm};

    case EDirection.DOWN:
      return { x: position.x, y: position.y + sqm};
  }
}

export enum ECanvas {
  FLOOR = 0,
  WALL = 1,
  DOOR = 2,
  TRAP = 3,
  MINI_DEMON = 4,
  DEMON = 5,
  CHEST = 6,
  HERO = 7
}

const FL = ECanvas.FLOOR;
const WL = ECanvas.WALL;
const DR = ECanvas.DOOR;
const TR = ECanvas.TRAP;
const MD = ECanvas.MINI_DEMON;
const DE = ECanvas.DEMON;
const CH = ECanvas.CHEST;
const HE = ECanvas.HERO;

export const canvas = [
  [WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, DR, DR, WL, WL, WL, WL, WL],
  [WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, DR, DR, WL, WL, WL, WL, WL],
  [WL, FL, FL, WL, FL, FL, FL, FL, WL, FL, FL, FL, FL, FL, FL, FL, WL, FL, FL, WL],
  [WL, FL, FL, FL, FL, TR, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],
  [WL, FL, FL, FL, FL, CH, FL, FL, FL, FL, FL, FL, TR, FL, FL, FL, FL, FL, FL, WL],
  [WL, FL, FL, FL, MD, FL, TR, FL, FL, FL, FL, FL, FL, FL, TR, FL, DE, FL, FL, WL],
  [WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, MD, FL, FL, FL, FL, FL, FL, FL, FL, WL],
  [WL, FL, FL, FL, FL, TR, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],
  [WL, FL, FL, FL, FL, FL, FL, FL, TR, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],
  [WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, MD, FL, FL, FL, FL, FL, FL, WL],
  [WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],
  [WL, FL, FL, FL, FL, FL, MD, FL, FL, FL, FL, FL, FL, FL, CH, FL, FL, FL, FL, WL],
  [WL, FL, FL, MD, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, TR, FL, FL, FL, WL],
  [WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, TR, FL, FL, FL, FL, FL, FL, FL, FL, WL],
  [WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, DE, FL, FL, FL, FL, WL],
  [WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],
  [WL, FL, FL, FL, FL, FL, FL, FL, FL, DE, FL, FL, FL, FL, FL, FL, DE, FL, FL, WL],
  [WL, HE, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, TR, FL, FL, FL, FL, FL, WL],
  [WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],
  [WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL]
];

export function checkValidMoviment(nextPosition) {
  const canvasValue = canvas[nextPosition.y][nextPosition.x];

  if (canvasValue === ECanvas.WALL) {
    return false;
  }

  if (canvasValue === ECanvas.TRAP) {
    console.log('Pisou na trap');
  }

  if (canvasValue === ECanvas.CHEST) {
    console.log('Pisou no bau');
  }

  return true;
}

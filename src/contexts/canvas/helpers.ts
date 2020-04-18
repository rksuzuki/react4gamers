import { EDirection } from "../../settings/constants";

export default function handleNextPosition (direction, position) {
  const sqm = 1;

  switch (direction) {
    case EDirection.LEFT:
      return { x: position.x - sqm, y: position.y };

    case EDirection.RIGHT:
      return { x: position.x + sqm, y: position.y };

    case EDirection.UP:
      return { x: position.x, y: position.y + sqm};

    case EDirection.DOWN:
      return { x: position.x, y: position.y - sqm};
  }
}
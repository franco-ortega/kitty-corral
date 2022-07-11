import { useState } from 'react';

const useKitty = () => {
  const [occupied, setOccupied] = useState(false);

  const enter = () => {
    setOccupied(true);
  };

  const exit = () => {
    setOccupied(false);
  };

  const move = () => {
    setOccupied((prevState) => !prevState);
  };

  return {
    occupied,
    enter,
    exit,
    move,
  };
};

export default useKitty;

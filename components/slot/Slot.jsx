import { useState } from 'react';
import Kitty from '../kitty/Kitty';
import styles from './Slot.module.css';

const Slot = () => {
  const [occupied, setOccupied] = useState(false);

  const onOccupiedClick = () => {
    setOccupied((prevState) => !prevState);
  };

  const display = occupied ? <Kitty occupied={occupied} /> : null;

  return (
    <div className={styles.Slot} onClick={onOccupiedClick}>
      {display}
    </div>
  );
};

export default Slot;

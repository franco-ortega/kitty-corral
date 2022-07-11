import { useState } from 'react';
import Kitty from '../kitty/Kitty';
import styles from './Slot.module.css';

const Slot = () => {
  const [displayKitty, setDisplayKitty] = useState(false);

  const onDisplayKittyClick = () => {
    setDisplayKitty((prevState) => !prevState);
  };

  const display = displayKitty ? <Kitty occupied={displayKitty} /> : null;

  return (
    <div className={styles.Slot} onClick={onDisplayKittyClick}>
      {display}
    </div>
  );
};

export default Slot;

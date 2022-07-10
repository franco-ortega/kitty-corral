import { useEffect, useState } from 'react';
import Slot from '../slot/Slot';
import styles from './Corral.module.css';

const Corral = ({ corralCount, occupied, setOccupied }) => {
  // const [occupied, setOccupied] = useState(false);

  console.log(corralCount);
  console.log(occupied);

  const slotsToDisplay = [];
  for (let i = 0; i < corralCount; i++) {
    slotsToDisplay.push(<Slot key={i} occupied={occupied} setOccupied={setOccupied} />);
  }
  const onAddKittyClick = () => {
    setOccupied(true);
  };

  console.log(slotsToDisplay)
  return (
    <div className={styles.Corral}>
      <div>{slotsToDisplay}</div>
      <button onClick={onAddKittyClick}>Add Kitty</button>
    </div>
  );
};

export default Corral;

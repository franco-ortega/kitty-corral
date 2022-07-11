import { useEffect, useState } from 'react';
import Slot from '../slot/Slot';
import styles from './Corral.module.css';

const Corral = ({ corralCount }) => {
  const [slots, setSlots] = useState([]);

  useEffect(() => {
    const slotsToDisplay = [];
    for (let i = 0; i < corralCount; i++) {
      slotsToDisplay.push(<Slot key={i} />);
    }
    setSlots(slotsToDisplay);
  }, [corralCount]);

  // const onAddKittyClick = () => {
  //   console.log('add one kitty');
  // };

  return (
    <div className={styles.Corral}>
      <p>Click on an empty space to add a kitty.</p>
      <div>{slots}</div>
      <p>Click on an occupied space to remove a kitty.</p>
      {/* <button onClick={onAddKittyClick}> */}
      {/* {!occupied ? 'Add Kitties' : 'Remove Kitties'} */}
      {/* </button> */}
    </div>
  );
};

export default Corral;

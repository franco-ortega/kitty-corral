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
      <div>{slots}</div>
      {/* <button onClick={onAddKittyClick}> */}
      {/* {!occupied ? 'Add Kitties' : 'Remove Kitties'} */}
      {/* </button> */}
    </div>
  );
};

export default Corral;

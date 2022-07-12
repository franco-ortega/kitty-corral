import { useEffect, useState } from 'react';
import Kitty from '../kitty/Kitty';
import Slot from '../slot/Slot';
import styles from './Corral.module.css';

const Corral = ({ corralCount }) => {
  const [slots, setSlots] = useState([]);

  useEffect(() => {
    const slotsToDisplay = [];
    for (let i = 0; i < corralCount; i++) {
      slotsToDisplay.push(false);
    }
    setSlots(slotsToDisplay);
  }, [corralCount]);

  const onAddKittyClick = () => {
    console.log('add one kitty');
    setSlots((prevState) => {
      return prevState.map((item, i) => {
        if (
          !item &&
          prevState[i - 1] === undefined &&
          prevState[i + 1] === false
        ) {
          return true;
        }
        if (!item && prevState[i - 1] === true && prevState[i + 1] === false) {
          return true;
        }
        if (
          !item &&
          prevState[i - 1] === true &&
          prevState[i + 1] === undefined
        ) {
          return true;
        }
        return item;
      });
    });
  };

  const onEmptyCorralClick = () => {
    setSlots((prevState) => prevState.map((item) => false));
  };

  return (
    <div className={styles.Corral}>
      <section>
        <div>
          {slots.map((item, i) => {
            if (item) {
              return <Kitty key={i} />;
            } else {
              return <Slot key={i} />;
            }
          })}
        </div>
        <button
          onClick={onAddKittyClick}
          disabled={slots.every((item) => item)}
        >
          Add Kitty
        </button>
        {slots.every((item) => item) && (
          <>
            <p>The Kitty Corral is full.</p>
            <button onClick={onEmptyCorralClick}>Empty Corral</button>
          </>
        )}
      </section>
    </div>
  );
};

export default Corral;

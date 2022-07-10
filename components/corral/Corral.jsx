import { useEffect, useState } from 'react';
import Kitty from '../kitty/Kitty';
import Slot from '../slot/Slot';
import styles from './Corral.module.css';

const Corral = ({ corralSize }) => {
  const [kittyAmount, setKittyAmount] = useState(corralSize);
  // const [kittyList, setKittyList] = useState([]);
  const [slots, setslots] = useState([]);

  // if(!kittyList.length) {
  //   for (let i = 0; i < kittyAmount; i++) {
  //     kittyList.push(<Kitty key={i} />);
  //     console.log('LOOP: ', i);
  //   }
  // }

  if(!slots.length) {
    for (let i = 0; i < kittyAmount; i++) {
      slots.push(<Slot key={i} />);
      console.log('LOOP: ', i);
    }
  }

  return <div className={styles.Corral}>{slots}</div>;
};

export default Corral;

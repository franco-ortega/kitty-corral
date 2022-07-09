import { useEffect, useState } from 'react';
import Kitty from '../kitty/Kitty';
import styles from './Corral.module.css';

const Corral = () => {
  const [kittyAmount, setKittyAmount] = useState(Math.floor(Math.random() * 20) + 1);
  const [kittyList, setKittyList] = useState([]);

console.log(kittyAmount, kittyList)
  
useEffect(() => {
  setKittyList(Array(kittyAmount).fill(null));
  }, [kittyAmount]);

  const kittiesToDisplay = kittyList.map((kitty, i) => (
    <Kitty key={i}/>
  ));

  return (
    <div className={styles.Corral}>
      {kittiesToDisplay}
    </div>
  );
};

export default Corral;

import { useEffect, useState } from 'react';
import Kitty from '../kitty/Kitty';
import styles from './Corral.module.css';

const Corral = ({ corralSize }) => {
  const [kittyAmount, setKittyAmount] = useState(corralSize);
  const [kittyList, setKittyList] = useState([]);

  if(!kittyList.length) {
    for (let i = 0; i < kittyAmount; i++) {
      kittyList.push(<Kitty key={i} />);
      console.log('LOOP: ', i);
    }
  }

  return <div className={styles.Corral}>{kittyList}</div>;
};

export default Corral;

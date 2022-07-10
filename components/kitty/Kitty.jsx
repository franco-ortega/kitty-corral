import Image from 'next/image';
import { useState } from 'react';
import styles from './Kitty.module.css';

const Kitty = ({occupied,  setOccupied }) => {
  const [occupyHere, setOccupyHere] = useState(true);

  const onOccupiedClick = () => {
    setOccupyHere(false);
  };
  return (
    <div className={styles.Kitty} onClick={onOccupiedClick}>
      {occupyHere && occupied && (
        <Image
          src="https://placekitten.com/100/100"
          alt="kitten"
          width="100"
          height="100"
        ></Image>
      )}
    </div>
  );
};

export default Kitty;

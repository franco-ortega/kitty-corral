import Image from 'next/image';
import { useState } from 'react';
import styles from './Kitty.module.css';

const Kitty = ({ occupied }) => {
  const [occupyHere, setOccupyHere] = useState(occupied);

  const onOccupyHereClick = () => {
    setOccupyHere(false);
  };
  return (
    <div className={styles.Kitty} onClick={onOccupyHereClick}>
      {occupyHere && occupied && (
        <Image
          src="https://placekitten.com/100/100"
          alt="kitten"
          width="100"
          height="100"
        />
      )}
    </div>
  );
};

export default Kitty;

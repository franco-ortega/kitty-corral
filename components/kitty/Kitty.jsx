import Image from 'next/image';
import { useState } from 'react';
import CorralSpace from '../CorralSpace/CorralSpace';
import styles from './Kitty.module.css';

const Kitty = ({ occupied, i, setCorralSpaces }) => {
  const [visible, setVisible] = useState(occupied);

  const onVisibleClick = () => {
    console.log('I: ', i);
    setVisible(false);
    setCorralSpaces((prevState) =>
      prevState.map((space) => {
        prevState[i] = <CorralSpace key={i} />;
        return space;
      })
    );
  };

  return (
    <div className={styles.Kitty} onClick={onVisibleClick}>
      {visible && (
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

import Kitty from '../kitty/Kitty';
import styles from './Slot.module.css';

const Slot = ({ occupied }) => {
  const display = occupied ? <Kitty occupied={occupied} /> : null;
  console.log('SLOT: ', occupied);
  return <div className={styles.Slot}>{display}</div>;
};

export default Slot;

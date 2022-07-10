import Kitty from '../kitty/Kitty';
import styles from './Slot.module.css';

const Slot = ({ occupied, setOccupied }) => {
    const display = occupied ? <Kitty occupied={occupied} setOccupied={setOccupied} /> : null
    console.log('SLOT: ', occupied)
  return <div className={styles.Slot}>
    {display}
  </div>;
};

export default Slot;

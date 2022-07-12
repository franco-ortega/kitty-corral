import Image from 'next/image';
import CorralSpace from '../CorralSpace/CorralSpace';
import styles from './Kitty.module.css';

const Kitty = ({ i, setCorralSpaces }) => {
  const onVisibleClick = () => {
    console.log('I: ', i);
    setCorralSpaces((prevState) =>
      prevState.map((space) => {
        prevState[i] = <CorralSpace key={i} />;
        return space;
      })
    );
  };

  return (
    <div className={styles.Kitty} onClick={onVisibleClick}>
      <Image
        src="https://placekitten.com/100/100"
        alt="kitten"
        width="100"
        height="100"
      />
    </div>
  );
};

export default Kitty;

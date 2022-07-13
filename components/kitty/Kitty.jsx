import Image from 'next/image';
import CorralSpace from '../CorralSpace/CorralSpace';
import styles from './Kitty.module.css';

const Kitty = ({ i, setCorralSpaces }) => {
  const onRemoveKittyClick = () => {
    setCorralSpaces((prevState) =>
      prevState.map((space, index) => {
        if (i === index) space = <CorralSpace key={i} />;
        return space;
      })
    );
  };

  return (
    <div className={styles.Kitty} onClick={onRemoveKittyClick}>
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

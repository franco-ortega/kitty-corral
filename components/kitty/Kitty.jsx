import Image from 'next/image';
import styles from './Kitty.module.css';

const Kitty = () => {
  return (
    <div className={styles.Kitty}>
      <Image src="https://placekitten.com/100/100" alt="kitten" width='100' height='100' ></Image>
    </div>
  );
};

export default Kitty;

import Nav from '../nav/Nav';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.Header}>
      <h1>Kitty Corral</h1>
      <Nav />
    </header>
  );
};

export default Header;

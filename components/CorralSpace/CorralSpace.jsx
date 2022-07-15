import styles from './CorralSpace.module.css';

const CorralSpace = ({ children }) => {
  return <li className={styles.CorralSpace}>{children}</li>;
};

export default CorralSpace;

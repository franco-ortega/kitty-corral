import styles from './CorralSpace.module.css';

const CorralSpace = ({ children }) => {
  return (
    <div className={styles.CorralSpace}>
      <div>{children}</div>
    </div>
  );
};

export default CorralSpace;

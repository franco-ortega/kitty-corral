import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.Home}>
      <h2>Landing Page</h2>
      <form action="">
        <input type="number" />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Home;
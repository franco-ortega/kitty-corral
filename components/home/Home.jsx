import styles from './Home.module.css';

const Home = ({ setCorralSize }) => {
  return (
    <div className={styles.Home}>
      <h2>Landing Page</h2>
      <form action="">
        <input type="number" onChange={(e) => setCorralSize(e.target.value)} />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Home;

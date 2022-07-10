import Router from 'next/router';
import styles from './Home.module.css';

const Home = ({ setCorralCount }) => {
  const onCorralCountSubmit = (e) => {
    e.preventDefault();
    Router.push('/corral');
  };

  return (
    <div className={styles.Home}>
      <h2>Landing Page</h2>
      <form action="">
        <input
          placeholder="0"
          type="number"
          onChange={(e) => setCorralCount(e.target.value)}
        />
        <button onClick={onCorralCountSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default Home;

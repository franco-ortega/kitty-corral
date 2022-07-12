import Router from 'next/router';
import styles from './Home.module.css';

const Home = ({ setCorralCount }) => {
  const onCorralCountSubmit = (e) => {
    e.preventDefault();
    Router.push('/corral');
  };

  return (
    <div className={styles.Home}>
      <h2>Welcome!!</h2>
      <p>Select the number of spaces in your corral.</p>
      <form onSubmit={onCorralCountSubmit}>
        <input
          required
          placeholder="0"
          type="number"
          min="0"
          onChange={(e) => setCorralCount(e.target.value)}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Home;

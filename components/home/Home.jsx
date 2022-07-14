import Router from 'next/router';
import styles from './Home.module.css';

const Home = ({ setCorralCount }) => {
  const onCorralCountSubmit = (e) => {
    e.preventDefault();
    Router.push('/corral');
  };

  return (
    <div className={styles.Home}>
      <p>
        Welcome!! Select the number of spaces to create your corral. Then, you
        can start filling it with kitties!
      </p>
      <div>
        <span>🐈‍⬛</span>
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
        <span>🐈</span>
      </div>
    </div>
  );
};

export default Home;

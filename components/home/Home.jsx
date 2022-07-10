import Router from 'next/router';
import styles from './Home.module.css';

const Home = ({ setCorralSize }) => {
  const onCorralSizeSubmit = (e) => {
    e.preventDefault();
    Router.push('/corral');
  };

  return (
    <div className={styles.Home}>
      <h2>Landing Page</h2>
      <form action="">
        <input type="number" onChange={(e) => setCorralSize(e.target.value)} />
        <button onClick={onCorralSizeSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default Home;

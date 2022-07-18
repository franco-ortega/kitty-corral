import styles from './About.module.css';

const About = () => {
  return (
    <div className={styles.About}>
      <h2>About</h2>
      <p>
        This app was inspired by my love of cats and this{' '}
        <a
          href="https://parking-lot-chi.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          Parking Lot app
        </a>{' '}
        that I found through a{' '}
        <a
          href="https://www.freecodecamp.org/news/parking-lot-challenge-solved-in-javascript/"
          target="_blank"
          rel="noreferrer"
        >
          Parking Lot Challenge article
        </a>{' '}
        at{' '}
        <a
          href="https://www.freecodecamp.org/"
          target="_blank"
          rel="noreferrer"
        >
          freeCodeCamp
        </a>
        . My implementation does not follow the approach outlined in the
        article, but that is where I got the idea to build an app that
        dynamically generates a number of empty spaces where each empty space
        can be filled one at a time with a single item by clicking a single
        button, and each item can be removed individually by clicking on the
        item itself, which results in the space becoming empty again.
        Additionally, I added a button that can empty all the spaces at once if
        all the spaces have been filled.
      </p>
      <p>
        This app was built with{' '}
        <a href="https://nextjs.org/" target="_blank" rel="noreferrer">
          NextJS
        </a>
        . The code for this app can be found at the{' '}
        <a
          href="https://github.com/franco-ortega/kitty-corral"
          target="_blank"
          rel="noreferrer"
        >
          GitHub repo for Kitty Corral
        </a>
      </p>
    </div>
  );
};

export default About;

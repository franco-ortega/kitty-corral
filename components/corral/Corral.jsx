import { useEffect, useState } from 'react';
import CorralSpace from '../CorralSpace/CorralSpace';
import Kitty from '../kitty/Kitty';
import styles from './Corral.module.css';

const Corral = ({ corralCount }) => {
  const [corralSpaces, setCorralSpaces] = useState([]);

  useEffect(() => {
    const corralSpacesCreated = [];
    for (let i = 0; i < corralCount; i++) {
      corralSpacesCreated.push(false);
    }
    setCorralSpaces(corralSpacesCreated);
  }, [corralCount]);

  const onAddKittyClick = () => {
    console.log('add one kitty');
    setCorralSpaces((prevState) => {
      return prevState.map((item, i) => {
        if (
          !item &&
          prevState[i - 1] === undefined &&
          prevState[i + 1] === false
        ) {
          return true;
        }
        if (!item && prevState[i - 1] === true && prevState[i + 1] === false) {
          return true;
        }
        if (
          !item &&
          prevState[i - 1] === true &&
          prevState[i + 1] === undefined
        ) {
          return true;
        }
        return item;
      });
    });
  };

  const onEmptyCorralClick = () => {
    setCorralSpaces((prevState) => prevState.map((item) => false));
  };

  return (
    <div className={styles.Corral}>
      <section>
        <div>
          {corralSpaces.map((item, i) => {
            if (item) {
              return (
                <CorralSpace key={i}>
                  <Kitty occupied={item} i={i} setCorralSpaces={setCorralSpaces} />
                </CorralSpace>
              );
            } else {
              return <CorralSpace key={i}></CorralSpace>;
            }
          })}
        </div>
        <button
          onClick={onAddKittyClick}
          disabled={corralSpaces.every((item) => item)}
        >
          Add Kitty
        </button>
        {corralSpaces.every((item) => item) && (
          <>
            <p>The Kitty Corral is full.</p>
            <button onClick={onEmptyCorralClick}>Empty Corral</button>
          </>
        )}
      </section>
    </div>
  );
};

export default Corral;

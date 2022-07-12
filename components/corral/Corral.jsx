import Link from 'next/link';
import { useEffect, useState } from 'react';
import CorralSpace from '../CorralSpace/CorralSpace';
import Kitty from '../kitty/Kitty';
import styles from './Corral.module.css';

const Corral = ({ corralCount }) => {
  const [corralSpaces, setCorralSpaces] = useState([]);

  useEffect(() => {
    const corralSpacesCreated = [];
    for (let i = 0; i < corralCount; i++) {
      corralSpacesCreated.push(<CorralSpace key={i} />);
    }
    setCorralSpaces(corralSpacesCreated);
  }, [corralCount]);

  const onAddKittyClick = () => {
    console.log('add one kitty');
    setCorralSpaces((prevState) => {
      return prevState.map((corralSpace, i) => {
        if (
          !prevState[i - 1] ||
          (prevState[i - 1].props.children &&
            !prevState[i + 1]?.props.children) ||
          (prevState[i - 1].props.children && !prevState[i + 1])
        ) {
          console.log('A');
          return (
            <CorralSpace key={i}>
              <Kitty i={i} setCorralSpaces={setCorralSpaces} />
            </CorralSpace>
          );
        }
        return corralSpace;
      });
    });
  };

  const onEmptyCorralClick = () => {
    setCorralSpaces((prevState) =>
      prevState.map((item, i) => <CorralSpace key={i} />)
    );
  };

  console.log(corralSpaces);

  return (
    <div className={styles.Corral}>
      <section>
        <div>{corralSpaces.map((item) => item)}</div>
        <button
          onClick={onAddKittyClick}
          // disabled={corralSpaces.every((item) => item)}
        >
          Add Kitty
        </button>
        {corralSpaces.every((item) => item.props?.children) && (
          <>
            <p>The Kitty Corral is full.</p>
            <button onClick={onEmptyCorralClick}>Empty Corral</button>
          </>
        )}
        <div>
          <Link href="/">Return Home</Link>
        </div>
      </section>
    </div>
  );
};

export default Corral;

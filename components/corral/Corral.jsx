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
      let length = 0;

      prevState.find((corralSpace, i) => {
        if (!corralSpace.props.children) {
          console.log('HELLO: ', i);
          length = i;
          return corralSpace;
        }
        console.log('LENGTH for each: ', length);
      });

      return prevState.map((corralSpace, i) => {
        console.log('LENGTH map: ', length);
        if (i === length)
          return (
            <CorralSpace key={i}>
              <Kitty i={i} setCorralSpaces={setCorralSpaces} />
            </CorralSpace>
          );
        return corralSpace;
      });
    });
  };

  const onEmptyCorralClick = () => {
    setCorralSpaces((prevState) =>
      prevState.map((space, i) => <CorralSpace key={i} />)
    );
  };

  console.log(corralSpaces);

  return (
    <div className={styles.Corral}>
      <section>
        <div>{corralSpaces.map((space) => space)}</div>
        <button
          onClick={onAddKittyClick}
          disabled={corralSpaces.every((space) => space.props.children)}
        >
          Add Kitty
        </button>
        {corralSpaces.every((space) => space.props?.children) && (
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

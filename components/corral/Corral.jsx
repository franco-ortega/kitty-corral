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
    setCorralSpaces((prevState) => {
      let length = 0;

      prevState.find((corralSpace, i) => {
        if (!corralSpace.props.children) {
          length = i;
          return corralSpace;
        }
      });

      return prevState.map((corralSpace, i) => {
        if (i === length)
          return (
            <CorralSpace key={i}>
              <Kitty position={i} setCorralSpaces={setCorralSpaces} />
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
          <p>The Kitty Corral is full.</p>
        )}
        <p>Click on a Kitty to remove it.</p>
        {corralSpaces.every((space) => space.props?.children) && (
          <button onClick={onEmptyCorralClick}>Empty Corral</button>
        )}
        <div>
          <Link href="/">Return Home</Link>
        </div>
      </section>
    </div>
  );
};

export default Corral;

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
      const firstEmptySpace = prevState.findIndex(
        (corralSpace) => !corralSpace.props.children
      );

      return prevState.map((corralSpace, i) => {
        if (i === firstEmptySpace) {
          corralSpace = (
            <CorralSpace key={i}>
              <Kitty position={i} setCorralSpaces={setCorralSpaces} />
            </CorralSpace>
          );
        }
        return corralSpace;
      });
    });
  };

  const onEmptyCorralClick = () => {
    setCorralSpaces((prevState) =>
      prevState.map((space, i) => space = <CorralSpace key={i} />)
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

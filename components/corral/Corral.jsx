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
      prevState.map((space, i) => (space = <CorralSpace key={i} />))
    );
  };

  const fullCorral = corralSpaces.every((space) => space.props.children);

  return (
    <div className={styles.Corral}>
      <div>
        <button onClick={onAddKittyClick} disabled={fullCorral}>
          Add Kitty
        </button>
      </div>

      <div>Click on a kitty to remove it.</div>

      <div>
        <button onClick={onEmptyCorralClick} disabled={!fullCorral}>
          Empty Corral
        </button>

        {fullCorral && <p>The corral is full.</p>}
      </div>

      <ul>{corralSpaces.map((space) => space)}</ul>
    </div>
  );
};

export default Corral;

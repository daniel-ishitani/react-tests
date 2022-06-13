import React, { useState } from 'react';

import { useDrawerResult } from '../../state/hooks/useDrawerResult';
import { useParticipantList } from '../../state/hooks/useParticipantList';
import styles from './styles.module.css';

const Draw = () => {
  const [selectedParticipant, setSelectedParticipant] = useState('');
  const [secretSanta, setSecretSanta] = useState('');

  const participants = useParticipantList();
  const draw = useDrawerResult();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    draw.has(selectedParticipant) && setSecretSanta(draw.get(selectedParticipant)!);
  };

  return (
    <section className={styles.draw}>
      <form onSubmit={handleSubmit}>
        <select
          required
          name="currentParticipant"
          id="currentParticipant"
          placeholder="Select your name"
          value={selectedParticipant}
          onChange={event => setSelectedParticipant(event.target.value)}
        >
          <option>Select your name</option>
          {participants.map(participant => <option key={participant}>{participant}</option>)}
        </select>
        <button className={styles.drawButton}>Draw!</button>
      </form>
      {secretSanta && <p className={styles.result} role="alert">{secretSanta}</p>}
      <footer className={styles.draw}>
        <img src="/images/aviao.png" alt="A drawing of a paper airplane" />
      </footer>
    </section>
  )
};

export default Draw;

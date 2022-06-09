import React, { useRef, useState } from 'react';

import { useAddParticipant } from '../../state/hooks/useAddParticipant';
import { useErrorMessage } from '../../state/hooks/useErrorMessage';
import styles from './styles.module.css';

const Form = () => {
  const [name, setName] = useState('');

  const inputRef = useRef<HTMLInputElement>(null);

  const addParticipant = useAddParticipant();

  const errorMessage = useErrorMessage();

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    addParticipant(name);
    setName('');
    inputRef.current?.focus();
  };

  return (
    <form onSubmit={onSubmit}>
      <div className={styles.inputBtnGroup}>
        <input
          type="text"
          placeholder="Insert the participants names"
          value={name}
          onChange={event => setName(event.target.value)}
          ref={inputRef}
        />
        <button disabled={!name}>Add</button>
      </div>
      {errorMessage && <p role="alert" className={styles.errorAlert}>{errorMessage}</p>}
    </form>
  )
};

export default Form;

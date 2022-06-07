import React, { useRef, useState } from 'react';

import { useAddParticipant } from '../../state/hooks/useAddParticipant';
import { useErrorMessage } from '../../state/hooks/useErrorMessage';

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
      <input
        type="text"
        placeholder="Insert the participants names"
        value={name}
        onChange={event => setName(event.target.value)}
        ref={inputRef}
      />
      <button disabled={!name}>Add</button>
      {errorMessage && <p role="alert">{errorMessage}</p>}
    </form>
  )
};

export default Form;

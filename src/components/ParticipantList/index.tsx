import React from 'react';

import { useParticipantList } from '../../state/hooks/useParticipantList';

const ParticipantList = () => {
  const participants = useParticipantList();

  return (
    <ul>
      {participants.map(
        participant => <li key={participant}>{participant}</li>
      )}
    </ul>
  )
};

export default ParticipantList;

import { useRecoilValue, useSetRecoilState } from 'recoil';

import { errorState, participantListState } from '../atom';

export const useAddParticipant = () => {
  const setList = useSetRecoilState(participantListState);
  const list = useRecoilValue(participantListState);
  const setError = useSetRecoilState(errorState);

  return (participantName: string) => {
    if (list.includes(participantName)) {
      setTimeout(() => {
        setError('');
      }, 5000);

      return setError('Duplicates are not allowed.');
    }

    return setList(currentList => [...currentList, participantName])
  }
}

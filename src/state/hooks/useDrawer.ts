import { useSetRecoilState } from 'recoil';

import { drawState } from '../atom';
import { useParticipantList } from './useParticipantList';
import { handleDraw } from '../helpers/handleDraw';

export const useDrawer = () => {
  const participants = useParticipantList();

  const setDraw = useSetRecoilState(drawState);

  return () => {
    setDraw(handleDraw(participants));
  };
};

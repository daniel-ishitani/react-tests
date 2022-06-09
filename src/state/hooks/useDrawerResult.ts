import { useRecoilValue } from 'recoil';

import { drawState } from '../atom';

export const useDrawerResult = () => {
  return useRecoilValue(drawState);
};

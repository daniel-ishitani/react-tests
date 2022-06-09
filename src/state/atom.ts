import { atom } from 'recoil';

export const participantListState = atom<string[]>({
  key: 'participantListState',
  default: [],
});

export const errorState = atom<string>({
  key: 'errorState',
  default: '',
});

export const drawState = atom<Map<string, string>>({
  key: 'drawState',
  default: new Map(),
});

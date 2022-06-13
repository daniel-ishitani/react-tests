import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { RecoilRoot } from 'recoil';

import { useParticipantList } from '../../state/hooks/useParticipantList';
import { useDrawerResult } from '../../state/hooks/useDrawerResult';
import Draw from '.';

jest.mock('../../state/hooks/useParticipantList', () => ({
  useParticipantList: jest.fn(),
}));

jest.mock('../../state/hooks/useDrawerResult', () => ({
  useDrawerResult: jest.fn(),
}));

describe('Draw', () => {
  const setup = () => {
    render(
      <RecoilRoot>
        <Draw />
      </RecoilRoot>
    );
  };

  const participants = ['one', 'two', 'three'];
  const draw = new Map([['one', 'three'], ['two', 'one'], ['three', 'two']]);

  beforeEach(() => {
    (useParticipantList as jest.Mock).mockReturnValue(participants);
    (useDrawerResult as jest.Mock).mockReturnValue(draw);
  });

  it('displays every participant', () => {
    setup();

    const options = screen.queryAllByRole('option');
    expect(options).toHaveLength(participants.length + 1);
  });

  it('displays the Secret santa when requested', () => {
    setup();

    const select = screen.getByPlaceholderText('Select your name');
    fireEvent.change(select, { target: { value: participants[0] } });

    const button = screen.getByRole('button');
    fireEvent.click(button);

    const secretSanta = screen.getByRole('alert');
    expect(secretSanta).toBeInTheDocument();
  });
});

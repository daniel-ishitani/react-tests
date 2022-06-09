import React from 'react';
import { render, screen } from '@testing-library/react';
import { RecoilRoot } from 'recoil';

import { useParticipantList } from '../../state/hooks/useParticipantList';
import ParticipantList from '.';

jest.mock('../../state/hooks/useParticipantList', () => ({
  useParticipantList: jest.fn(),
}));

describe('ParticipantList', () => {
  const setup = () => {
    render(
      <RecoilRoot>
        <ParticipantList />
      </RecoilRoot>
    );
  };

  describe('when there are no participants', () => {
    beforeEach(() => {
      (useParticipantList as jest.Mock).mockReturnValue([]);
    });

    it('renders an empty list', () => {
      setup();
  
      const items = screen.queryAllByRole('listitem');
  
      expect(items).toHaveLength(0);
    });
  });

  describe('when there are participants', () => {
    const participants = ['first', 'second'];

    beforeEach(() => {
      (useParticipantList as jest.Mock).mockReturnValue(participants);
    });

    it('lists them', () => {
      setup();
  
      const items = screen.queryAllByRole('listitem');
  
      expect(items).toHaveLength(participants.length);
    });
  })
});

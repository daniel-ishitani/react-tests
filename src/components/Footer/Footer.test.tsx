import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { RecoilRoot } from 'recoil';

import { useParticipantList } from '../../state/hooks/useParticipantList';
import Footer from '.';

jest.mock('../../state/hooks/useParticipantList', () => ({
  useParticipantList: jest.fn(),
}));

const mockNavigation = jest.fn();
const mockDraw = jest.fn();

jest.mock('../../state/hooks/useDrawer', () => ({
  useDrawer: () => mockDraw,
}));

jest.mock('react-router-dom', () => ({
  useNavigate: () => mockNavigation,
}));

describe('Footer', () => {
  const setup = () => {
    render(
      <RecoilRoot>
        <Footer />
      </RecoilRoot>
    );
  };

  describe('when there are not enough participants', () => {
    beforeEach(() => {
      (useParticipantList as jest.Mock).mockReturnValue([]);
    });

    it('can\'t start', () => {
      setup();

      const button = screen.getByRole('button');

      expect(button).toBeDisabled();
    });
  });

  describe('when there are enough participants', () => {
    beforeEach(() => {
      (useParticipantList as jest.Mock).mockReturnValue(['first', 'second', 'third']);
    });

    it('can start', () => {
      setup();

      const button = screen.getByRole('button');

      expect(button).toBeEnabled();
    });

    describe('on start', () => {
      it('navigates to the draw page', () => {
        setup();

        const button = screen.getByRole('button');

        fireEvent.click(button);

        expect(mockNavigation).toBeCalledWith('/draw');
        expect(mockDraw).toBeCalledTimes(1);
      });
    });
  });
});

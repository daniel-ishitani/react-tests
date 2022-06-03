import React from 'react';
import { render, screen } from '@testing-library/react';

import Form from '.';

describe('Form', () => {
  describe('when input is empty', () => {
    it('can\'t add new participants', () => {
      render(<Form />);

      const input = screen.getByPlaceholderText('Insert the participants names');
      const button = screen.getByRole('button');

      expect(input).toBeInTheDocument();
      expect(button).toBeDisabled();
    });
  });
});

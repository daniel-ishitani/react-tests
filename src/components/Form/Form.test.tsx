import React from 'react';
import { act } from 'react-dom/test-utils';
import { fireEvent, render, screen } from '@testing-library/react';
import { RecoilRoot } from 'recoil';

import Form from '.';

describe('Form', () => {
  jest.useFakeTimers();

  const setupForm = () => render(
    <RecoilRoot>
      <Form />
    </RecoilRoot>
  );

  const addName = ({ input, button, name }: {
    input: HTMLElement,
    button: HTMLElement,
    name: string,
  }) => {
    fireEvent.change(input, {
      target: { value: name },
    });

    fireEvent.click(button);
  };

  describe('when input is empty', () => {
    it('can\'t add new participants', () => {
      setupForm();

      const input = screen.getByPlaceholderText('Insert the participants names');
      const button = screen.getByRole('button');

      expect(input).toBeInTheDocument();
      expect(button).toBeDisabled();
    });
  });

  describe('when name is filled', () => {
    it('adds a participant, clear and focus the input', () => {
      setupForm();
  
      const input = screen.getByPlaceholderText('Insert the participants names');
      const button = screen.getByRole('button');

      addName({ input, button, name: 'name' });

      expect(input).toHaveFocus();
      expect(input).toHaveValue('');
    });

    it('fails to add duplicates', () => {
      setupForm();
    
      const input = screen.getByPlaceholderText('Insert the participants names');
      const button = screen.getByRole('button');
  
      addName({ input, button, name: 'name' });
      addName({ input, button, name: 'name' });
  
      const errorMessage = screen.getByRole('alert');
  
      expect(errorMessage.textContent).toBe('Duplicates are not allowed.');
    });

    describe('when it fails to add a participant', () => {
      it('clears the error message after a few seconds', () => {
        setupForm();
    
        const input = screen.getByPlaceholderText('Insert the participants names');
        const button = screen.getByRole('button');
    
        addName({ input, button, name: 'name' });
        addName({ input, button, name: 'name' });
    
        let errorMessage: HTMLElement | null = screen.getByRole('alert');
    
        expect(errorMessage).toBeInTheDocument();

        act(() => {
          jest.runAllTimers();
        });

        errorMessage = screen.queryByRole('alert');

        expect(errorMessage).toBeNull();
      });
    });
  });
});

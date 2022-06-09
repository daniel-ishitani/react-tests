import React from 'react';
import { render } from '@testing-library/react';
import { RecoilRoot } from 'recoil';

import Settings from '.';

jest.mock('react-router-dom', () => ({
  useNavigate: () => jest.fn(),
}));

describe('Settings', () => {
  it('renders correctly', () => {
    const { container } = render(
      <RecoilRoot>
        <Settings />
      </RecoilRoot>
    );

    expect(container).toMatchSnapshot();
  });
});

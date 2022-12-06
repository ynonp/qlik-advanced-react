import { render, screen } from '@testing-library/react';
import Randomizer from './Randomizer';

jest.mock('lodash', () => {
  return  {
    random() { return 5 }
  };
});

test('shows the value', () => {
  
  render(<Randomizer />);
  expect(screen.getByText(/5/));
});


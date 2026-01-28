import { render, screen } from '@testing-library/react';
import App from './App';

test('renders PhraseDrill welcome text', () => {
  render(<App />);
  expect(screen.getByText(/PhraseDrill/)).toBeInTheDocument();
  expect(screen.getByText(/улучшить свой разговорный английский/)).toBeInTheDocument();
});

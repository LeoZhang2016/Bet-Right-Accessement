import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Bet Right', () => {
  render(<App />);
  const linkElement = screen.getByText(/Bet Right/i);
  expect(linkElement).toBeInTheDocument();
});

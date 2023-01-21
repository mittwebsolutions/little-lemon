import { render, screen } from '@testing-library/react';
import App from './App';
import { MemoryRouter } from 'react-router-dom';

test('Renders Little Lemon page heading', () => {
  render(<App />, {wrapper: MemoryRouter});
  const element = screen.getByRole('heading', {level: 1});
  expect(element).toBeInTheDocument();
  expect(element).toHaveTextContent("Little Lemon");
});
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react', () => {
  render(<App />);
  const linkElement = screen.getByText("Welcome");
  expect(linkElement).toBeInTheDocument();
});

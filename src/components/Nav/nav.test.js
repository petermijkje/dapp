import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<Nav />);
  const linkElement = screen.getByText(/Locacia/i);
  expect(linkElement).toBeInTheDocument();
});

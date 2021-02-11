import { render, screen } from '@testing-library/react';
import App from './App';
import nonprofits from './data/nonprofits';

// Always confirm yes on dialog
let confirmSpy;
beforeAll(() => {
  confirmSpy = jest.spyOn(window, 'confirm');
  confirmSpy.mockImplementation(jest.fn(() => true));
});
afterAll(() => confirmSpy.mockRestore());

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

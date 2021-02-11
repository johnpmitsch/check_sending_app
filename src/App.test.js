import { render, fireEvent } from '@testing-library/react';
import App from './App';
import nonprofits from './data/nonprofits';
import { toDollars } from './helpers';

let firstNonprofit;
beforeAll(() => {
  firstNonprofit = nonprofits[0];
});

test('renders and displays nonprofit info in table', () => {
  const { getByText } = render(<App />);
  const { name, address, amount } = firstNonprofit;
  expect(getByText(name)).toBeInTheDocument();
  expect(getByText(address)).toBeInTheDocument();
  expect(getByText(toDollars(amount))).toBeInTheDocument();
});

test('Can edit mailing address', () => {
  const { name } = firstNonprofit;
  const { getByLabelText, queryByText, getByText } = render(<App />);
  const newAddress = '100 east awesome street';

  expect(queryByText(newAddress)).not.toBeInTheDocument(); // New address isn't showing yet
  fireEvent.click(getByLabelText(`edit ${name}`)); // click edit
  const inputElement = getByLabelText(`${name} address`);
  fireEvent.change(inputElement, { target: { value: newAddress } }); // fill out input
  fireEvent.click(getByLabelText(`save ${name}`)); // save new address
  expect(getByText(newAddress)).toBeInTheDocument(); // new address is now showing
});

test('Can cancel editing mailing address', () => {
  const { name, address } = firstNonprofit;
  const { getByLabelText, queryByText, getByText } = render(<App />);
  const newAddress = '100 east awesome street';

  expect(queryByText(newAddress)).not.toBeInTheDocument();
  fireEvent.click(getByLabelText(`edit ${name}`));
  const inputElement = getByLabelText(`${name} address`);
  fireEvent.change(inputElement, { target: { value: newAddress } });
  fireEvent.click(getByLabelText(`cancel ${name}`));

  // Since the edit was cancelled, we are back to the original address
  expect(queryByText(newAddress)).not.toBeInTheDocument();
  expect(getByText(address)).toBeInTheDocument();
});

test('Can send check', () => {
  const { name } = firstNonprofit;
  // Always confirm yes on confirm dialog
  const confirmSpy = jest.spyOn(window, 'confirm');
  confirmSpy.mockImplementation(jest.fn(() => true));

  const { getByText, queryByText, getByLabelText } = render(<App />);
  expect(getByText(name)).toBeInTheDocument();
  fireEvent.click(getByLabelText(`send ${name}`));
  // Check is sent so row disappears
  expect(queryByText(name)).not.toBeInTheDocument();
});

test('Can cancel sending check', () => {
  const { name } = firstNonprofit;
  // Always confirm no on confirm dialog
  const confirmSpy = jest.spyOn(window, 'confirm');
  confirmSpy.mockImplementation(jest.fn(() => false));

  const { getByText, queryByText, getByLabelText } = render(<App />);
  expect(getByText(name)).toBeInTheDocument();
  fireEvent.click(getByLabelText(`send ${name}`));
  // Check send was not confirmed, so row is still present
  expect(queryByText(name)).toBeInTheDocument();
});

import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders the page heading', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/things to do/i);
  expect(linkElement).toBeInTheDocument();
});

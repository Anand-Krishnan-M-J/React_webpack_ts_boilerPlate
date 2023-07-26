import React from 'react';
import { render, screen } from '@testing-library/react';
import { App } from './App';

test('renders the example component', () => {
  render(<App />);
  const element = screen.getByText('BoilerPlate');
  expect(element).toBeInTheDocument();
});

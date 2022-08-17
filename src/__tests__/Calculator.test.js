import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Calculator from '../components/Calculator';

test('renders correctly', () => {
  const tree = render(<Calculator />);
  expect(tree).toMatchSnapshot();
});
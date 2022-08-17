import React from 'react';
import { render } from '@testing-library/react';
import Home from '../components/Home';

test('renders correctly', () => {
  const tree = render(<Home />);
  expect(tree).toMatchSnapshot();
});

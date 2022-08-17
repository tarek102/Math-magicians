import React from 'react';
import { render } from '@testing-library/react';
import Quote from '../components/Quote';

test('renders correctly', () => {
  const tree = render(<Quote />);
  expect(tree).toMatchSnapshot();
});

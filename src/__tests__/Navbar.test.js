import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../components/Navbar';

test('renders correctly', () => {
  const tree = render(<BrowserRouter><Navbar /></BrowserRouter>);
  expect(tree).toMatchSnapshot();
});

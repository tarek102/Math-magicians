import { render, screen, fireEvent } from '@testing-library/react';
import Calculator from '../components/Calculator';

describe('Test rendering and user interaction', () => {
  it('renders correctly', () => {
    const tree = render(<Calculator />);
    expect(tree).toMatchSnapshot();
  });

  it('User interaction', () => {
    render(<Calculator />);

    fireEvent.click(screen.getByRole('button', { name: '2' }));
    fireEvent.click(screen.getByRole('button', { name: '1' }));
    fireEvent.click(screen.getByRole('button', { name: '+' }));
    fireEvent.click(screen.getByRole('button', { name: '7' }));
    fireEvent.click(screen.getByRole('button', { name: '=' }));

    expect(screen.getByText('28')).toBeTruthy();
  });
});

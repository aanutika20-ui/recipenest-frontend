// src/__tests__/Button.test.js
import { render, screen } from '@testing-library/react';
import Button from '../components/Button';

test('button has correct Tailwind classes', () => {
  render(<Button label="Click Me" />);
  const button = screen.getByText(/Click Me/i);
  expect(button).toHaveClass('bg-blue-500', 'text-white', 'py-2', 'px-4');
});

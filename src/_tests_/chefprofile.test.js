// src/__tests__/ChefProfile.test.js
import { render, screen } from '@testing-library/react';
import ChefProfile from '../components/ChefProfile';

test('renders chef name and bio', () => {
  const mockChef = { name: 'Chef John', bio: 'Expert in Italian cuisine' };
  render(<ChefProfile chef={mockChef} />);
  expect(screen.getByText(/Chef John/i)).toBeInTheDocument();
  expect(screen.getByText(/Expert in Italian cuisine/i)).toBeInTheDocument();
});

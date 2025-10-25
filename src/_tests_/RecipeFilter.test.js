// src/__tests__/RecipeFilter.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import RecipePortfolio from '../components/RecipePortfolio';

test('filters recipes by category', () => {
  const mockRecipes = [
    { id: 1, title: 'Sushi', category: 'Japanese' },
    { id: 2, title: 'Tacos', category: 'Mexican' },
  ];
  render(<RecipePortfolio recipes={mockRecipes} />);
  fireEvent.change(screen.getByLabelText(/Filter by category/i), {
    target: { value: 'Japanese' },
  });
  expect(screen.getByText(/Sushi/i)).toBeInTheDocument();
  expect(screen.queryByText(/Tacos/i)).not.toBeInTheDocument();
});

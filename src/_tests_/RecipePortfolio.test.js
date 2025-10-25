// src/__tests__/RecipePortfolio.test.js
import { render, screen } from '@testing-library/react';
import RecipePortfolio from '../components/RecipePortfolio';

test('renders list of recipes', () => {
  const mockRecipes = [
    { id: 1, title: 'Spaghetti Carbonara' },
    { id: 2, title: 'Margherita Pizza' },
  ];
  render(<RecipePortfolio recipes={mockRecipes} />);
  expect(screen.getByText(/Spaghetti Carbonara/i)).toBeInTheDocument();
  expect(screen.getByText(/Margherita Pizza/i)).toBeInTheDocument();
});

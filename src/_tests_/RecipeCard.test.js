// src/__tests__/RecipeCard.test.js
import { render } from '@testing-library/react';
import RecipeCard from '../components/RecipeCard';

test('matches snapshot', () => {
  const { asFragment } = render(<RecipeCard title="Pasta" />);
  expect(asFragment()).toMatchSnapshot();
});

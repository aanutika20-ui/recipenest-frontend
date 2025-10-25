// src/__tests__/ChefDashboard.test.js
import { render, screen, waitFor } from '@testing-library/react';
import ChefDashboard from '../components/ChefDashboard';
import { getChefData } from '../firebase';

jest.mock('../firebase', () => ({
  getChefData: jest.fn(),
}));

test('displays chef data from Firestore', async () => {
  getChefData.mockResolvedValue({ name: 'Chef Anna', recipes: [] });
  render(<ChefDashboard />);
  await waitFor(() => expect(screen.getByText(/Chef Anna/i)).toBeInTheDocument());
});

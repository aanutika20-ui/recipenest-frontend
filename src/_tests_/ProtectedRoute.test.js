// src/__tests__/ProtectedRoute.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

// Mock the authentication hook
jest.mock('react-firebase-hooks/auth', () => ({
  useAuthState: () => [null, false], // Simulate unauthenticated user
}));

test('redirects to Login page when accessing protected route without authentication', () => {
  render(
    <MemoryRouter initialEntries={['/dashboard']}>
      <App />
    </MemoryRouter>
  );
  expect(screen.getByText(/Login/i)).toBeInTheDocument();
});

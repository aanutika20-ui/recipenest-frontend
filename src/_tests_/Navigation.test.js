// src/__tests__/Navigation.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import App from '../App';

test('renders navigation component', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>
  );

  // Check for the presence of navigation links
  expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /login/i })).toBeInTheDocument();
  // Add more assertions as needed for other navigation links
});

test('navigates to Login page when Login link is clicked', async () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>
  );

  const loginLink = screen.getByRole('link', { name: /login/i });
  await userEvent.click(loginLink);

  expect(screen.getByText(/login/i)).toBeInTheDocument();
});


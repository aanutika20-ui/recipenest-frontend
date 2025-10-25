// src/__tests__/Accessibility.test.js
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';
import App from '../App';

test('should have no accessibility violations', async () => {
  const { container } = render(<App />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});

// src/mocks/handlers.js
import { rest } from 'msw';

export const handlers = [
  rest.get('/api/recipes', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        { id: 1, title: 'Spaghetti Carbonara' },

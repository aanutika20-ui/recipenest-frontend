// src/__tests__/firebase.test.js
import { initializeApp } from 'firebase/app';
import firebaseConfig from '../firebaseConfig';

jest.mock('firebase/app');

test('Firebase initializes with correct config', () => {
  require('../firebase'); // This should call initializeApp
  expect(initializeApp).toHaveBeenCalledWith(firebaseConfig);
});

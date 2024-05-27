// src/components/App.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for the "toBeInTheDocument" matcher
import App from '../App';


test('adds and toggles a todo', () => {
  render(<App />);
  const input = screen.getByRole('textbox');
  const addButton = screen.getByText(/add todo/i);

  fireEvent.change(input, { target: { value: 'Test Todo' } });
  fireEvent.click(addButton);

  const todoItem = screen.getByLabelText(/test todo/i);
  expect(todoItem).toBeInTheDocument();
  expect(todoItem).not.toBeChecked();

  fireEvent.click(todoItem);
  expect(todoItem).toBeChecked();
})

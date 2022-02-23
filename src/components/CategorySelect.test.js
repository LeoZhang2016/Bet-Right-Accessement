import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { CategorySelect } from './CategorySelect';

test('renders categories', () => {
  const categories = ['Throughbred', 'Harness', 'Greyhound'];
  const onCategoryChange = jest.fn();

  render(<CategorySelect categories={categories} onCategoryChange={onCategoryChange} />);

  expect(screen.getByText(/Throughbred/i)).toBeInTheDocument();
  expect(screen.getByText(/Harness/i)).toBeInTheDocument();
  expect(screen.getByText(/Greyhound/i)).toBeInTheDocument();
});

test('onCategoryChange is invoked when category is selected', () => {
  const categories = ['Throughbred', 'Harness', 'Greyhound'];
  const onCategoryChange = jest.fn();

  render(<CategorySelect categories={categories} onCategoryChange={onCategoryChange} />);
  userEvent.click(screen.getByRole('option', {name: /Greyhound/i}));
  userEvent.selectOptions(screen.getByTestId('category-select'), "Greyhound");
  expect(screen.getByRole('option', {name: /Greyhound/i}).selected).toBe(true);
  expect(onCategoryChange).toBeCalledWith('Greyhound');
});
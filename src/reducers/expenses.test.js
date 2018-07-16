import expensesReducer from './expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });

  expect(state).toEqual([]);
});

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  };
  const state = expensesReducer(expenses, action);

  expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expense if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  };
  const state = expensesReducer(expenses, action);

  expect(state).toEqual(expenses);
});

test('should add an expense', () => {
  const expense = {
    id: '12345',
    description: 'Car',
    note: '',
    amount: 10000,
    createdAt: 1000
  };
  const action = {
    type: 'ADD_EXPENSE',
    expense
  };
  const state = expensesReducer(expenses, action);

  expect(state).toEqual([...expenses, expense])
});

test('should edit an expense', () => {
  const updates = {
    description: 'Water'
  };
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[1].id,
    updates
  };
  const state = expensesReducer(expenses, action);

  expect(state[1].description).toEqual(updates.description);
});

test('should not edit an expense if id not found', () => {
  const updates = {
    description: 'Water'
  };
  const action = {
    type: 'EDIT_EXPENSE',
    id: '123abc',
    updates
  };
  const state = expensesReducer(expenses, action);

  expect(state).toEqual(expenses);
});
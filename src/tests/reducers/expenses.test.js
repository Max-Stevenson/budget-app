import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('Should set a default state', () => {
  const state = expensesReducer(undefined, {type: '@@INIT'});
  expect(state).toEqual([]);
});

test('Should add an expense', () => {
  const expense = {
    description: 'testing',
    note:  'test',
    amount: 10,
    createdAt: 0
  };

  const action = {
    type: 'ADD_EXPENSE',
    expense
  };

  const state = expensesReducer(expenses, action);
  expect(state).toContain(expense);
});

test('Should remove an expense with valid id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[0].id
  };

  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[1], expenses[2]]);
});

test('Should not remove an expense with an invalid id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: 4
  };

  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('Should edit an expense with a correct id', () => {
  const amount = 100;
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[0].id,
    updates: {
      amount
    }
  };

  const state = expensesReducer(expenses, action);
  expect(state[0].amount).toBe(100);
});

test('Should not edit an expenses with an incorrect id', () => {
  const amount = 100;
  const action = {
    type: 'EDIT_EXPENSE',
    id: 4,
    updates: {
      amount
    }
  };

  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('Should set expenses', () => {
  const action = {
    type: 'SET_EXPENESES', 
    expenses: [expenses[1]]
  };

  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[1]]);
});
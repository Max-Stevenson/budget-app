import { addExpense, editExpense, removeExpense } from '../../actions/expenses';
import { string } from 'postcss-selector-parser';

test('Should setup remove expense action object', () => {
  const action = removeExpense({ id: 'test' });
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: 'test'
  });
});

test('Should setup edit expense action object', () => {
  const action = editExpense('test', { note: 'test' });
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: 'test',
    updates: {
      note: 'test'
    }
  });
});

test('Should setup add expense action object', () => {
  const expenseData = {
    description: 'testDescription',
    note: 'testNote',
    amount: 1,
    createdAt: 1
  };
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  });
});

test('Should setup add expense action object with default values', () => {
  const action = addExpense();
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      description: '',
      note: '',
      amount: 0,
      createdAt: 0,
      id: expect.any(String)
    }
  });
});
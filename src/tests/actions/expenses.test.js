import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { startAddExpense, addExpense, editExpense, removeExpense } from '../../actions/expenses';
import expenses from '../fixtures/expenses';

const createMockStore = configureMockStore([thunk]);

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

test('Should setup add expense action object with provided values', () => {
  const expenseData = expenses[0]
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: expenses[0]
  });
});

test('Should add expense to database and store', (done) => {
  const store = createMockStore({});
  const expenseData = {
    description: 'test',
    amount: '10.00',
    note: 'test data',
    createdAt: 1000
  };
  
  store.dispatch(startAddExpense(expenseData)).then(() => {
    done();
  });
});

test('Should add expense with defaults to database and store', () => {

});

// test('Should setup add expense action object with default values', () => {
//   const action = addExpense();
//   expect(action).toEqual({
//     type: 'ADD_EXPENSE',
//     expense: {
//       description: '',
//       note: '',
//       amount: 0,
//       createdAt: 0,
//       id: expect.any(String)
//     }
//   });
// });
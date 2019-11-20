import {addExpense, editExpense, removeExpense} from '../../actions/expenses';

test('Should setup remove expense action object', () => {
  const action = removeExpense({id: 'test'});
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
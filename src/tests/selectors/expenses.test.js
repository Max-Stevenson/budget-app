import selectExpenses from '../../selectors/expenses';

const expenses = [{
  id: '1',
  description: 'test',
  note: 'test',
  amount: 1,
  createdAt: 0
}, {
  id: '2',
  description: 'test two',
  note: 'test',
  amount: 1,
  createdAt: -1000
}, {
  id: '3',
  description: 'test three',
  note: 'test',
  amount: 2,
  createdAt: 1000
}];

test('Should filter by text value', () => {
  const filters = {
    text: 'two',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  };
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([expenses[1]]);
});

test('Should filter by start date', () => {
  
})
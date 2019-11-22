import selectExpenses from '../../selectors/expenses';
import moment from 'moment';

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
  createdAt: moment(0).subtract(4, 'days').valueOf()
}, {
  id: '3',
  description: 'test three',
  note: 'test',
  amount: 2,
  createdAt: moment(0).add(4, 'days').valueOf()
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

test('Should filter by startDate', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: moment(0),
    endDate: undefined
  }
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([expenses[2], expenses[0]])
});

test('Should sort by amount', () => {

});

test('Should sort by date', () => {

});

test('Should sort by endDate', () => {

});

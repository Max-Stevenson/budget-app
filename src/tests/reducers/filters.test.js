import filtersReducer from '../../reducers/filters';
import moment from 'moment';

test('Should setup default filter values', () => {
  const state = filtersReducer(undefined, {type: '@@INIT'});
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  });
});

test('Should set sortBy to amount', () => {
  const state = filtersReducer(undefined, {type: 'SORT_BY_AMOUNT'});
  expect(state.sortBy).toBe('amount');
});

test('Should set sortBy to date', () => {
  const currentState = {
    text: '',
    sortBy: 'amount',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  };
  const state = filtersReducer(undefined, {type: 'SORT_BY_DATE'});
  expect(state.sortBy).toBe('date');
});

test('Should set the text filter', () => {
  const state = filtersReducer(undefined, {type: 'SET_TEXT_FILTER', text: 'test'});
  expect(state.text).toBe('test');
});

test('Should set the start date', () => {
  const startDate = moment();
  const action = {
    type: 'SET_START_DATE',
    date: startDate
  };
  const state = filtersReducer(undefined, action);
  expect(state.startDate).toEqual(startDate);
});

test('Should set the end date', () => {
  const endDate = moment();
  const action = {
    type: 'SET_END_DATE',
    date: endDate
  };
  const state = filtersReducer(undefined, action);
  expect(state.endDate).toEqual(endDate);
});
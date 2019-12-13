import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseSummary } from '../../components/ExpensesSummary';

test('Should render ExpenseSummary with single expense', () => {
  const wrapper = shallow(<ExpenseSummary expenseCount={1} expensesTotal={5000}/>);
  expect(wrapper).toMatchSnapshot();
});

test('Should render ExpenseSummary with multiple expenses', () => {
  const wrapper = shallow(<ExpenseSummary expenseCount={3} expensesTotal={10000}/>);
  expect(wrapper).toMatchSnapshot();
});
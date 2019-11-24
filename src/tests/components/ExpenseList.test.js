import { ExpenseList } from '../../components/ExpenseList';
import { shallow } from 'enzyme';
import React from 'react';
import expenses from '../fixtures/expenses';

test('Should render Expense List with expenses', () => {
  const wrapper = shallow(<ExpenseList expenses={expenses}/>);
  expect(wrapper).toMatchSnapshot();
});
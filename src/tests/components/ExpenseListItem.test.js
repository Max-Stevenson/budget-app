import ExpenseListItem from '../../components/ExpenseListItem';
import { shallow } from 'enzyme';
import React from 'react';
import expenses from '../fixtures/expenses';

test('Should render ExpenseListItem with expenses', () => {
  const expense = expenses[1];
  const wrapper = shallow(<ExpenseListItem {...expense}/>);
  expect(wrapper).toMatchSnapshot();
});
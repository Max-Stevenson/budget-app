import ExpenseDashboardPage from '../../components/ExpenseDashboardPage';
import { shallow } from 'enzyme';
import React from 'react';
import expenses from '../fixtures/expenses';

test('Should render the ExpenseDashboard', () => {
  const wrapper = shallow(<ExpenseDashboardPage/>);
  expect(wrapper).toMatchSnapshot();
});
import NotFoundPage from '../../components/NotFoundPage';
import React from 'react';
import { shallow } from 'enzyme';

test('Should render NotFoundPage', () => {
  const wrapper = shallow(<NotFoundPage/>);
  expect(wrapper).toMatchSnapshot();
});
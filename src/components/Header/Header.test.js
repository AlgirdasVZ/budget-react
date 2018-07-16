import React from 'react';
import Header from './Header';
import { shallow } from 'enzyme';

test('should render Header correctly', () => {
  const wrapper = shallow(<Header />);

  expect(wrapper).toMatchSnapshot();
});

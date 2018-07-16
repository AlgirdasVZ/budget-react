import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseSummary } from './ExpensesSummary';


test('should correctly render ExpensesSummary with 1 expense', () => {
  const wrapper = shallow(<ExpenseSummary
    expenseCount={1}
    expensesTotal={235}
  />);
  expect(wrapper).toMatchSnapshot();
});

test('should correctly render ExpensesSummary with multiple expenses', () => {
  const wrapper = shallow(<ExpenseSummary
    expenseCount={21}
    expensesTotal={235045.5}
  />);
  expect(wrapper).toMatchSnapshot();
});
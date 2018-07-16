import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from './ExpenseListFilters';
import { filters, filters2 } from '../../fixtures/filters';
import { DateRangePicker } from 'react-dates';

let setStartDate, setEndDate, setTextFilter,
  sortByDate, sortByAmount, wrapper;

beforeEach(() => {
  setStartDate = jest.fn();
  setEndDate = jest.fn();
  setTextFilter = jest.fn();
  sortByDate = jest.fn();
  sortByAmount = jest.fn();
  wrapper = shallow(<ExpenseListFilters
    setStartDate={setStartDate}
    setEndDate={setEndDate}
    setTextFilter={setTextFilter}
    sortByDate={sortByDate}
    sortByAmount={sortByAmount}
    filters={filters}
  />)
});

test('should render ExpenseListFilters correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseListFilters with filters2 set correctly', () => {
  wrapper.setProps({ filters: filters2 });
  expect(wrapper).toMatchSnapshot();
});

test('should handle text change', () => {
  const newEvent = { target: { value: filters2.text }};
  wrapper.find('input').simulate('change', newEvent);
  expect(setTextFilter).toHaveBeenLastCalledWith(filters2.text);
});

test('should sort by date', () => {
  const newEvent = { target: { value: 'date' }};
  wrapper.setProps({ filters: filters2 });
  wrapper.find('select').simulate('change', newEvent);
  expect(sortByDate).toHaveBeenCalled();
});

test('should sort by amount', () => {
  const newEvent = { target: { value: 'amount' }};
  wrapper.find('select').simulate('change', newEvent);
  expect(sortByAmount).toHaveBeenCalled();
});

test('should handle date changes', () => {
  const newEvent = {
    startDate: filters2.startDate,
    endDate: filters2.endDate
  };
  wrapper.find(DateRangePicker).prop('onDatesChange')(newEvent);
  expect(setStartDate).toHaveBeenLastCalledWith(filters2.startDate);
  expect(setEndDate).toHaveBeenLastCalledWith(filters2.endDate);
});

test('should handle date focus changes', () => {
  wrapper.find(DateRangePicker).prop('onFocusChange')('startDate');
  expect(wrapper.state().calendarFocused).toBe('startDate');
});
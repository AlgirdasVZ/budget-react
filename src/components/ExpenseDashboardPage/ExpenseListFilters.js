import React, { Component } from 'react';
import { connect } from 'react-redux';
import {setEndDate, setStartDate, setTextFilter, sortByAmount, sortByDate} from '../../actions/filters';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

export class ExpenseListFilters extends Component {
  state = {
    calendarFocused: null
  };

  onDatesChanged = ({startDate, endDate}) => {
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  };

  onFocusChange = (calendarFocused) => {
    this.setState(() => ({ calendarFocused }));
  };

  onSortFilterChange = (e) => {
    const val = e.target.value;

    if (val === 'date') {
      this.props.sortByDate();
    } else if (val === 'amount') {
      this.props.sortByAmount();
    }
  };

  onTextFilterChange = (e) => {
    this.props.setTextFilter(e.target.value);
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.props.filters.text}
          onChange={this.onTextFilterChange}
        />
        <select
          value={this.props.filters.sortBy}
          onChange={this.onSortFilterChange}>
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
        <DateRangePicker
          startDate={this.props.filters.startDate}
          startDateId="startDate"
          endDate={this.props.filters.endDate}
          endDateId="endDate"
          onDatesChange={this.onDatesChanged}
          focusedInput={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          showClearDates
          numberOfMonths={1}
          isOutsideRange={() => false}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  filters: state.filters
});

const mapDispatchToProps = (dispatch, props) => ({
  setStartDate: (startDate) => dispatch(setStartDate(startDate)),
  setEndDate: (endDate) => dispatch(setEndDate(endDate)),
  setTextFilter: (value) => dispatch(setTextFilter(value)),
  sortByDate: () => dispatch(sortByDate()),
  sortByAmount: () => dispatch(sortByAmount())
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);
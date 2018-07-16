import React, { Component } from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpenseSummary from './ExpensesSummary';

class ExpenseDashboardPage extends Component {
  render() {
    return (
      <div>
        <ExpenseSummary />
        <ExpenseListFilters />
        <ExpenseList/>
      </div>
    );
  }
}

export default ExpenseDashboardPage;
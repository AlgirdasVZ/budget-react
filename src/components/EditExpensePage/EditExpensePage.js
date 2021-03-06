import React, { Component } from 'react';
import { startEditExpense, startRemoveExpense } from '../../actions/expenses';
import { connect } from 'react-redux';
import ExpenseForm from '../ExpenseForm/ExpenseForm';

export class EditExpensePage extends Component {
  onSubmit = (expense) => {
    this.props.startEditExpense(this.props.expense.id, expense);
    this.props.history.push('/dashboard');
  };

  onRemove = () => {
    this.props.startRemoveExpense({ id: this.props.expense.id });
    this.props.history.push('/dashboard');
  };

  render() {
    return (
      <div>
        <h3>Edit expense</h3>
        <ExpenseForm
          onSubmit={this.onSubmit}
          expense={this.props.expense}
        />
        <button
          onClick={this.onRemove}
        >Remove</button>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find((expense) => {
    return expense.id === props.match.params.id;
  })
});

const mapDispatchToProps = (dispatch, props) => ({
  startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
  startRemoveExpense: (id) => dispatch(startRemoveExpense(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
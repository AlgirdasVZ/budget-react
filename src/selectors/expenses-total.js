const selectExpensesTotal = (expenses) => (
  expenses.reduce((sum, expense) => sum + expense.amount, 0)
);

export default selectExpensesTotal;
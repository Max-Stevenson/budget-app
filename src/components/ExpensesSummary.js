import React from 'react';
import { connect } from 'react-redux';
require('numeral/locales/en-gb');
import numeral from 'numeral';
numeral.locale('en-gb');

export const ExpenseSummary = ({ expenseCount, expensesTotal }) => {
  const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
  const formattedExpenseTotal = numeral(expensesTotal / 100).format('$0,0.00');

  return (
    <div>
      <h1>Viewing {expenseCount} {expenseWord} totalling: {formattedExpenseTotal}</h1>
    </div>
  );
};
import { createStore, combineReducers } from 'redux';



store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
  console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({ description: 'rent', amount: 100, createdAt: 1000 }));
const expenseTwo = store.dispatch(addExpense({ description: 'Test expense two', amount: 500, createdAt: 2000 }));
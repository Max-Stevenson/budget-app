import React from 'react';
import AppRouter from '../src/routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense, removeExpense, editExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import '../styles/styles.scss';

const store = configureStore();
store.dispatch(addExpense({description: 'water Bill'}));
store.dispatch(addExpense({description: 'gas Bill'}));
store.dispatch(setTextFilter('gas'));
const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

console.log(visibleExpenses);
ReactDOM.render(<AppRouter/>, document.getElementById('app'));
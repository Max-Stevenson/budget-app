import React from 'react';
import AppRouter from '../src/routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense, removeExpense, editExpense } from './actions/expenses';
import { Provider } from 'react-redux';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import '../styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css'

const store = configureStore();
store.dispatch(addExpense({description: 'water Bill', amount: 4500}));
store.dispatch(addExpense({description: 'gas Bill', amount: 6500, createdAt: 1000}));
store.dispatch(addExpense({description: 'Rent Bill', amount: 1900}));

const jsx = (
  <Provider store={store}>
    <AppRouter/>
  </Provider>
);
ReactDOM.render(jsx, document.getElementById('app'));
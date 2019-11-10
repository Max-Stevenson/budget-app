import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import 'normalize.css/normalize.css';
import '../styles/styles.scss';

const ExpenseDashboardPage = () => (
    <div>Dashboard page</div>
);

const AddExpensePage = () => (
    <div>Expense page</div>
);

const routes = (
    <BrowserRouter>
        <div>
        <Route path="/" component={ExpenseDashboardPage} exact={true}/>
        <Route path="/create" component={AddExpensePage}/>
        </div>
    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));
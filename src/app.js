import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'normalize.css/normalize.css';
import '../styles/styles.scss';

const ExpenseDashboardPage = () => (
	<div>Dashboard page</div>
);

const AddExpensePage = () => (
	<div>Expense page</div>
);

const EditExpensePage = () => (
	<div>Edit Expense page</div>
);

const HelpPage = () => (
	<div>Help page</div>
);

const NotFoundPage = () => (
	<div>404</div>
);

const routes = (
	<BrowserRouter>
		<Switch>
			<Route path="/" component={ExpenseDashboardPage} exact={true} />
			<Route path="/create" component={AddExpensePage} />
			<Route path="/edit" component={EditExpensePage} />
			<Route path="/help" component={HelpPage} />
			<Route component={NotFoundPage} />
		</Switch>
	</BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));
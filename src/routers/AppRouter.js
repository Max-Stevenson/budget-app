import React from 'react';
import Header from '../components/Header';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

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
	<div>
		404 - <Link to="/">Go Home</Link>
	</div>
);

const AppRouter = () => (
  <BrowserRouter>
		<div>
			<Header/>
			<Switch>
				<Route path="/" component={ExpenseDashboardPage} exact={true} />
				<Route path="/create" component={AddExpensePage} />
				<Route path="/edit" component={EditExpensePage} />
				<Route path="/help" component={HelpPage} />
				<Route component={NotFoundPage} />
			</Switch>
		</div>
	</BrowserRouter>
)

export default AppRouter;
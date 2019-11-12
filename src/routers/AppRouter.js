import React from 'react';
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

const Header = () => (
	<header>
		<h1>Expense App</h1>
		<NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
		<NavLink to="/create" activeClassName="is-active">Add Expense</NavLink>
		<NavLink to="/edit" activeClassName="is-active">Edit Expense</NavLink>
		<NavLink to="/help" activeClassName="is-active">Help Page</NavLink>
	</header>
)

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
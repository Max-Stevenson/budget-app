import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
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
	<div>
		404 - <Link to="/">Go Home</Link>
	</div>
);

const Header = () => (
	<header>
		<h1>Expense App</h1>
		<Link to="/">Home</Link>
		<Link to="/create">Add Expense</Link>
		<Link to="/edit">Edit Expense</Link>
		<Link to="/help">Help Page</Link>
	</header>
)

const routes = (
	<BrowserRouter>
		<div>
			<Header />
			<Switch>
				<Route path="/" component={ExpenseDashboardPage} exact={true} />
				<Route path="/create" component={AddExpensePage} />
				<Route path="/edit" component={EditExpensePage} />
				<Route path="/help" component={HelpPage} />
				<Route component={NotFoundPage} />
			</Switch>
		</div>
	</BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));
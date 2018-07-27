import React from 'react'
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import Welcome from './components/Welcome';
import LoginPage from  './components/login/LoginPage';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={Welcome} />
		<Route path="login" component={LoginPage} />
	</Route>
)
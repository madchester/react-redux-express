import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';


import App from './app/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import store from './app/redux/store/store';

const appStore = store();
const history = createBrowserHistory();

ReactDOM.render(
	<Provider store={appStore}>
		<Router history={history}>
			<App />
		</Router>
	</Provider>, 
	document.getElementById('root'));
registerServiceWorker();

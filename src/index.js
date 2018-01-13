import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/index';

render(<Provider store={store}>
		<h1>Dupa</h1>
	</Provider>, document.getElementById('root'));

